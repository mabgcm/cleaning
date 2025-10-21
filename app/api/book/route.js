// app/api/book/route.js
export const runtime = 'nodejs';

import nodemailer from 'nodemailer';

const isEmail = (v) =>
    typeof v === 'string' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

function fmt(v) { return (v ?? '—'); }
function list(arr) { return Array.isArray(arr) && arr.length ? arr.join(', ') : '—'; }

export async function POST(req) {
    let data;
    try {
        data = await req.json();
    } catch {
        return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), { status: 400 });
    }

    const { customer = {}, booking = {}, metadata = {} } = data;

    // --- minimal validation ---
    if (!isEmail(customer.email)) {
        return new Response(JSON.stringify({ ok: false, error: 'Customer email is missing/invalid' }), { status: 400 });
    }
    if (!booking?.cleaningType || !booking?.date || !booking?.city) {
        return new Response(JSON.stringify({ ok: false, error: 'Required booking fields missing' }), { status: 400 });
    }

    // Use GoDaddy SMTP (env set in Vercel)
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true', // true for 465
        auth: {
            user: process.env.SMTP_USER, // e.g. info@cooking.com
            pass: process.env.SMTP_PASS,
        },
    });

    // From must usually match SMTP_USER on GoDaddy
    const FROM = process.env.FROM_EMAIL || process.env.SMTP_USER;
    const OWNER = process.env.OWNER_EMAIL || process.env.SMTP_USER;

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

    let ownerSent = false;
    let customerSent = false;

    try {
        const info1 = await transporter.sendMail({
            from: FROM,
            to: OWNER,
            replyTo: customer.email, // handy for quick reply
            subject: `New Booking: ${fmt(booking.cleaningType)} • ${fmt(booking.city)} • ${fmt(booking.date)}`,
            text: stripHtml(ownerHtml),
            html: ownerHtml,
        });
        ownerSent = Boolean(info1?.messageId);
        console.log('owner mail result', info1?.messageId || info1);
    } catch (err) {
        console.error('owner mail error', err);
    }

    try {
        const info2 = await transporter.sendMail({
            from: FROM,
            to: customer.email,
            // optional: cc your team for visibility
            subject: 'We received your booking request',
            text: stripHtml(customerHtml),
            html: customerHtml,
        });
        customerSent = Boolean(info2?.messageId);
        console.log('customer mail result', info2?.messageId || info2);
    } catch (err) {
        console.error('customer mail error', err);
    }

    // Return detailed result so the client can react
    return new Response(JSON.stringify({ ok: ownerSent || customerSent, ownerSent, customerSent }), {
        status: ownerSent || customerSent ? 200 : 500,
        headers: { 'Content-Type': 'application/json' },
    });
}

function stripHtml(html) {
    return html.replace(/<[^>]+>/g, '').replace(/\s+\n/g, '\n').trim();
}