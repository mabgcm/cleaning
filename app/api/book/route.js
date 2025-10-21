// app/api/book/route.js
export const runtime = 'nodejs';

import nodemailer from "nodemailer";

const fmt = (v) => (v ?? "—");
const list = (arr) => (Array.isArray(arr) && arr.length ? arr.join(", ") : "—");
const stripHtml = (html) => html.replace(/<[^>]+>/g, "").replace(/\s+\n/g, "\n").trim();

export async function POST(req) {
    try {
        const data = await req.json().catch(() => ({}));
        const {
            customer = {},  // name, phone, email (optional if you don’t want to send to them), address, postalCode
            booking = {},   // cleaningType, bedrooms, bathrooms, squareFeetRange, city, date, cleaningItems, totalAmount
            metadata = {}   // optional: ip, ua, source
        } = data;

        // ---- minimal validation (only booking required since we’re not emailing customer) ----
        if (!booking?.cleaningType || !booking?.date || !booking?.city) {
            return new Response(JSON.stringify({ ok: false, error: "Required booking fields missing" }), { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === "true", // true for 465
            auth: {
                user: process.env.SMTP_USER,  // e.g. info@cooking.com
                pass: process.env.SMTP_PASS,
            },
        });

        // For GoDaddy reliability, use the raw SMTP mailbox as the From:
        const FROM = process.env.SMTP_USER;
        const OWNER = process.env.OWNER_EMAIL || process.env.SMTP_USER;

        // (Optional) surface SMTP issues clearly in Vercel logs
        await transporter.verify().catch((e) => { console.error("SMTP verify failed", e); throw e; });

        const ownerHtml = `
      <h2>New Booking Request</h2>
      <h3>Booking Details</h3>
      <ul>
        <li><b>Type:</b> ${fmt(booking.cleaningType)}</li>
        <li><b>Bedrooms:</b> ${fmt(booking.bedrooms)}</li>
        <li><b>Bathrooms:</b> ${fmt(booking.bathrooms)}</li>
        <li><b>Square Feet Range:</b> ${fmt(booking.squareFeetRange)}</li>
        <li><b>City:</b> ${fmt(booking.city)}</li>
        <li><b>Date/Time:</b> ${fmt(booking.date)}</li>
        <li><b>Extras:</b> ${list(booking.cleaningItems)}</li>
        <li><b>Estimated Total:</b> C$${fmt(booking.totalAmount)}</li>
      </ul>
      <h3>Customer Details</h3>
      <ul>
        <li><b>Name:</b> ${fmt(customer.name)}</li>
        <li><b>Phone:</b> ${fmt(customer.phone)}</li>
        <li><b>Email:</b> ${fmt(customer.email)}</li>
        <li><b>Address:</b> ${fmt(customer.address)}</li>
        <li><b>Postal Code:</b> ${fmt(customer.postalCode)}</li>
      </ul>
      <h3>Meta</h3>
      <pre>${JSON.stringify(metadata, null, 2)}</pre>
    `;

        const info = await transporter.sendMail({
            from: FROM,
            to: OWNER,
            // Nice touch: if the customer entered an email, set reply-to for quick replies
            ...(customer?.email ? { replyTo: customer.email } : {}),
            subject: `New Booking: ${fmt(booking.cleaningType)} • ${fmt(booking.city)} • ${fmt(booking.date)}`,
            text: stripHtml(ownerHtml),
            html: ownerHtml,
        });

        const ownerSent = Boolean(info?.messageId);
        return new Response(JSON.stringify({ ok: ownerSent, ownerSent }), {
            status: ownerSent ? 200 : 500,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("Booking API error:", err);
        return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
    }
}