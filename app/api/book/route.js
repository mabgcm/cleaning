// app/api/book/route.js
export const runtime = 'nodejs';

import twilio from "twilio";

const fmt = (v) => (v ?? "—");
const list = (arr) => Array.isArray(arr) && arr.length ? arr.join(", ") : "—";

export async function POST(req) {
    try {
        const data = await req.json().catch(() => ({}));
        const { customer = {}, booking = {}, metadata = {} } = data;

        // Minimal validation for test
        if (!booking?.cleaningType || !booking?.date || !booking?.city) {
            return new Response(JSON.stringify({ ok: false, error: "Required booking fields missing" }), { status: 400 });
        }

        // Build message text (keep it compact for WhatsApp)
        const text =
            `🧹 New booking
• Type: ${fmt(booking.cleaningType)}
• City: ${fmt(booking.city)}
• Date: ${fmt(booking.date)}
• SqFt: ${fmt(booking.squareFeetRange)}
• Beds/Baths: ${fmt(booking.bedrooms)}/${fmt(booking.bathrooms)}
• Extras: ${list(booking.cleaningItems)}
• Est: C$${fmt(booking.totalAmount)}
• Name: ${fmt(customer.name)}
• Phone: ${fmt(customer.phone)}
• Email: ${fmt(customer.email)}
• Addr: ${fmt(customer.address)} ${fmt(customer.postalCode)}`;

        // Send via Twilio WhatsApp Sandbox
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        const msg = await client.messages.create({
            from: process.env.TWILIO_WHATSAPP_FROM, // "whatsapp:+14155238886" (sandbox)
            to: process.env.MY_WHATSAPP_TO,         // "whatsapp:+1XXXXXXXXXX" (your phone)
            body: text,
        });

        // You can also log msg.sid to verify
        console.log("whatsapp message sid", msg.sid);

        return new Response(JSON.stringify({ ok: true, whatsappSid: msg.sid }), {
            status: 200, headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        console.error("Booking API error:", err);
        return new Response(JSON.stringify({ ok: false, error: String(err?.message || err) }), { status: 500 });
    }
}