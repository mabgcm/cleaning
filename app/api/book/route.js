// app/api/book/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const data = await req.json();

        // Basic shape
        const {
            customer = {},       // name, phone, email, address, postalCode
            booking = {},        // cleaningType, bedrooms, bathrooms, squareFeetRange, city, date, cleaningItems, totalAmount
            metadata = {}        // optional: ip, userAgent, source, etc.
        } = data;

        // ---- validate minimal fields ----
        if (!customer?.email || !booking?.cleaningType || !booking?.date) {
            return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 });
        }

        // ---- Nodemailer transporter ----
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT, 10),
            secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Helpers
        const fmt = (v) => (v ?? "—");
        const list = (arr) => Array.isArray(arr) && arr.length ? arr.join(", ") : "—";

        // ---- Owner email (FULL details) ----
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

        await transporter.sendMail({
            from: process.env.FROM_EMAIL,            // e.g. "Neat Guys <no-reply@yourdomain.com>"
            to: process.env.OWNER_EMAIL,             // you
            subject: `New Booking: ${booking.cleaningType} • ${booking.city} • ${booking.date}`,
            html: ownerHtml
        });

        // ---- Customer email (BOOKING ONLY) ----
        const customerHtml = `
      <h2>Booking Request Received</h2>
      <p>Thanks for your request! Here are your booking details:</p>
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
      <p>We’ll contact you shortly to confirm.</p>
    `;

        await transporter.sendMail({
            from: process.env.FROM_EMAIL,
            to: customer.email,                      // customer
            subject: "We received your booking request",
            html: customerHtml
        });

        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (err) {
        console.error("Booking API error:", err);
        return new Response(JSON.stringify({ ok: false, error: "Server error" }), { status: 500 });
    }
}