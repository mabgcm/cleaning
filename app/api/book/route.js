// app/api/book/route.js
export const runtime = 'nodejs';

import nodemailer from "nodemailer";

const fmt = (v) => (v ?? "—");
const list = (arr) => Array.isArray(arr) && arr.length ? arr.join(", ") : "—";

const buildOwnerEmail = ({ customer, booking }) => {
    const subject = `New booking: ${fmt(booking.cleaningType)} on ${fmt(booking.date)}`;
    const text =
        `🧹 New booking\n` +
        `• Type: ${fmt(booking.cleaningType)}\n` +
        `• City: ${fmt(booking.city)}\n` +
        `• Date: ${fmt(booking.date)}\n` +
        `• SqFt: ${fmt(booking.squareFeetRange)}\n` +
        `• Beds/Baths: ${fmt(booking.bedrooms)}/${fmt(booking.bathrooms)}\n` +
        `• Extras: ${list(booking.cleaningItems)}\n` +
        `• Est: C$${fmt(booking.totalAmount)}\n` +
        `• Name: ${fmt(customer.name)}\n` +
        `• Phone: ${fmt(customer.phone)}\n` +
        `• Email: ${fmt(customer.email)}\n` +
        `• Addr: ${fmt(customer.address)} ${fmt(customer.postalCode)}`;

    return { subject, text };
};

const buildCustomerEmail = ({ customer, booking }) => {
    const subject = "Thanks! We received your cleaning request";
    const text =
        `Hi ${fmt(customer.name)},\n\n` +
        `Thanks for choosing us. We’ve received your cleaning request and will confirm shortly.\n\n` +
        `Summary:\n` +
        `• Service: ${fmt(booking.cleaningType)}\n` +
        `• Date/Time: ${fmt(booking.date)}\n` +
        `• Location: ${fmt(booking.city)}\n` +
        `• SqFt: ${fmt(booking.squareFeetRange)}\n` +
        `• Beds/Baths: ${fmt(booking.bedrooms)}/${fmt(booking.bathrooms)}\n` +
        `• Extras: ${list(booking.cleaningItems)}\n` +
        `• Estimate: C$${fmt(booking.totalAmount)}\n\n` +
        `We will be in touch with you to confirm the estimate price.\n\n` +
        `Brinova Cleaning Team`;

    return { subject, text };
};

export async function POST(req) {
    try {
        const data = await req.json().catch(() => ({}));
        const { customer = {}, booking = {} } = data;

        if (!booking?.cleaningType || !booking?.date || !booking?.city) {
            return new Response(JSON.stringify({ ok: false, error: "Required booking fields missing" }), { status: 400 });
        }

        const GMAIL_USER = process.env.GMAIL_USER;
        const GMAIL_PASS = process.env.GMAIL_PASS;
        const OWNER_EMAIL = process.env.OWNER_EMAIL || GMAIL_USER;

        if (!GMAIL_USER || !GMAIL_PASS || !OWNER_EMAIL) {
            return new Response(JSON.stringify({ ok: false, error: "Missing email env vars (GMAIL_USER, GMAIL_PASS, OWNER_EMAIL)" }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS,
            },
        });

        const ownerEmail = buildOwnerEmail({ customer, booking });
        await transporter.sendMail({
            from: `"Brinova Cleaning" <${GMAIL_USER}>`,
            to: OWNER_EMAIL,
            subject: ownerEmail.subject,
            text: ownerEmail.text,
        });

        if (customer?.email) {
            const customerEmail = buildCustomerEmail({ customer, booking });
            await transporter.sendMail({
                from: `"Brinova Cleaning" <${GMAIL_USER}>`,
                to: customer.email,
                replyTo: OWNER_EMAIL,
                subject: customerEmail.subject,
                text: customerEmail.text,
            });
        }

        return new Response(JSON.stringify({ ok: true }), {
            status: 200, headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        console.error("Booking API error:", err);
        return new Response(JSON.stringify({ ok: false, error: String(err?.message || err) }), { status: 500 });
    }
}
