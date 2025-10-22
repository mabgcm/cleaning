// app/api/book/route.js
export const runtime = 'nodejs';

import twilio from "twilio";

const fmt = (v) => (v ?? "—");
const list = (arr) => Array.isArray(arr) && arr.length ? arr.join(", ") : "—";

export async function POST(req) {
    try {
        const data = await req.json().catch(() => ({}));
        const { customer = {}, booking = {} } = data;

        if (!booking?.cleaningType || !booking?.date || !booking?.city) {
            return new Response(JSON.stringify({ ok: false, error: "Required booking fields missing" }), { status: 400 });
        }

        // ✅ Read and validate envs up front (avoids the cryptic "params['to'] missing")
        const FROM = process.env.TWILIO_WHATSAPP_FROM;   // e.g. "whatsapp:+14155238886" (Sandbox)
        const TO = process.env.MY_WHATSAPP_TO;         // e.g. "whatsapp:+1YOURNUMBER"
        if (!FROM || !TO) {
            return new Response(JSON.stringify({ ok: false, error: "Missing FROM/TO WhatsApp env vars" }), { status: 400 });
        }

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

        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        const msg = await client.messages.create({
            from: FROM,    // "whatsapp:+14155238886"
            to: TO,        // "whatsapp:+1YOURNUMBER"
            body: text,    // ✅ freeform body for Sandbox
        });

        return new Response(JSON.stringify({ ok: true, whatsappSid: msg.sid }), {
            status: 200, headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        console.error("Booking API error:", err);
        return new Response(JSON.stringify({ ok: false, error: String(err?.message || err) }), { status: 500 });
    }
}