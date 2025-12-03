// app/api/contact/route.js
export const runtime = 'nodejs';

import nodemailer from "nodemailer";

const fmt = (v) => (v ?? "—");

export async function POST(req) {
    try {
        const data = await req.json().catch(() => ({}));
        const { name = "", email = "", phone = "", subject = "", message = "" } = data;

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ ok: false, error: "Missing required fields." }), { status: 400 });
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

        const ownerText =
            `📩 New contact form submission\n` +
            `• Name: ${fmt(name)}\n` +
            `• Email: ${fmt(email)}\n` +
            `• Phone: ${fmt(phone)}\n` +
            `• Subject: ${fmt(subject)}\n` +
            `• Message:\n${fmt(message)}`;

        await transporter.sendMail({
            from: `"Cleaning Website" <${GMAIL_USER}>`,
            to: OWNER_EMAIL,
            replyTo: email,
            subject: subject ? `Contact: ${subject}` : "Contact form submission",
            text: ownerText,
        });

        return new Response(JSON.stringify({ ok: true }), {
            status: 200, headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        console.error("Contact API error:", err);
        return new Response(JSON.stringify({ ok: false, error: String(err?.message || err) }), { status: 500 });
    }
}
