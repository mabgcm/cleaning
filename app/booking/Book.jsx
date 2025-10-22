'use client'
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';

export default function Book() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const bookingParam = searchParams.get('booking');

    // --- Safely parse the estimate coming from Cta.jsx (via query string) ---
    let estimate = {};
    try {
        estimate = bookingParam ? JSON.parse(bookingParam) : {};
    } catch (e) {
        // leave estimate empty; we'll render a small warning below
    }

    // --- Form state (customer details you collect here) ---
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");

    // --- Prefilled booking details from the estimate (read-only on this page) ---
    const [city] = useState(estimate.city || "");
    const [bedrooms] = useState(estimate.bedrooms || "");
    const [bathrooms] = useState(estimate.bathrooms || "");
    const [squareFeetRange] = useState(estimate.squareFeetRange || "");
    const [cleaningItems] = useState(Array.isArray(estimate.cleaningItems) ? estimate.cleaningItems : []);
    const [cleaningType] = useState(estimate.cleaningType || "");
    const [date] = useState(estimate.date || "");
    const [totalAmount] = useState(estimate.totalAmount ?? ""); // numeric or string is fine here

    // --- UI state ---
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [success, setSuccess] = useState(false);

    const getCleaningTypeName = (t) => {
        switch (t) {
            case 'deep': return 'Deep Cleaning';
            case 'movein': return 'Move In / Out Cleaning';
            case 'office': return 'Office Cleaning';
            case 'regular': return 'Regular Cleaning';
            case 'onetime': return 'One-time Cleaning';
            case 'airbnb': return 'Airbnb Cleaning';
            default: return '';
        }
    };

    // NOTE: ensure IDs match what you used in Cta.jsx (e.g., 'steam' plural)
    const getCleaningItemsName = (id) => {
        switch (id) {
            case 'cupboardsin': return 'Cleaning Inside the Kitchen Cupboards';
            case 'ovenin': return 'Cleaning Inside the Oven';
            case 'fridge': return 'Cleaning Inside the Fridge';
            case 'dish': return 'Hand-washing everything in the sink';
            case 'dishwasher': return 'Loading / Unloading the Dishwasher';
            case 'wall': return 'Cleaning the Walls';
            case 'windows': return 'Cleaning the Windows Glass from Inside';
            case 'steam': return 'Cushion Steam Cleaning';
            default: return '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccess(false);

        // Basic client-side validation
        if (!email || !name || !phone) {
            setErrorMsg("Please enter your name, phone, and email.");
            return;
        }
        if (!cleaningType || !date || !city) {
            setErrorMsg("Missing booking details. Please go back and recalculate your estimate.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // We send two blocks: customer (your details form) + booking (estimate from CTA)
                body: JSON.stringify({
                    customer: {
                        name,
                        phone,
                        email,
                        address,
                        postalCode,
                    },
                    booking: {
                        cleaningType,
                        bedrooms,
                        bathrooms,
                        squareFeetRange,
                        city,
                        date,
                        cleaningItems,       // array of IDs
                        totalAmount,         // optional number shown back to the user
                    },
                    metadata: {
                        source: "website",
                        ua: typeof navigator !== "undefined" ? navigator.userAgent : "",
                    }
                })
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.error || "Failed to submit booking");
            }

            setSuccess(true);
            // You can either show inline success or redirect to a thank-you page:
            // router.push("/thanks");
        } catch (err) {
            console.error(err);
            setErrorMsg(err?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const hasEstimate = !!estimate && !!estimate.cleaningType;

    return (
        <div className='col-11 mx-auto'>

            {!hasEstimate && (
                <div className="alert alert-warning my-3">
                    We couldn’t find your estimate details. Please go back and calculate again.
                </div>
            )}

            {success ? (
                <div className="py-4">
                    <h4 className="mb-2">Thanks! 🎉</h4>
                    <p>We’ve got your booking details and notified our team. We’ll contact you shortly to confirm.</p>
                    <Button className="mt-2" onClick={() => router.push("/")}>Back to Home</Button>
                </div>
            ) : (
                <Form onSubmit={handleSubmit} className='py-3'>

                    {/* Summary sentence */}
                    <div>
                        Enter your details for the{" "}
                        <span className='fw-semibold'>{getCleaningTypeName(cleaningType)} Package</span>{" "}
                        for <span className='fw-semibold'>{squareFeetRange && `${squareFeetRange}`}</span>{" "}
                        square feet area with <span className='fw-semibold'>{bedrooms} bedroom(s)</span>{" "}
                        and <span className='fw-semibold'>{bathrooms && `${bathrooms} bathroom(s)`}</span>
                        {cleaningItems && cleaningItems.length > 0 && (
                            <>
                                , including{" "}
                                <span className='fw-semibold'>
                                    {cleaningItems.map(item => getCleaningItemsName(item)).filter(Boolean).join(', ')}
                                </span>
                            </>
                        )}
                        . The service will be scheduled for{" "}
                        <span className='fw-semibold'>{date && `${date}`}</span>
                        {totalAmount !== "" && (
                            <>
                                {" "}with the estimated amount of{" "}
                                <span className='fw-semibold text-danger'>C${totalAmount}.00</span>.
                            </>
                        )}
                    </div>

                    {/* Customer details form */}
                    <Form.Group className='mt-3'>
                        <Form.Label className='fw-semibold'>Your Name:</Form.Label>
                        <Form.Control
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Your full name..."
                            value={name}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label className='fw-semibold'>Your Phone Number:</Form.Label>
                        <Form.Control
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            placeholder="Your phone number..."
                            value={phone}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label className='fw-semibold'>Your Email:</Form.Label>
                        <Form.Control
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="your@email..."
                            value={email}
                            required
                        />
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label className='fw-semibold'>Your Address:</Form.Label>
                        <Form.Control
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            placeholder="Full service address"
                            value={address}
                        />
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label className='fw-semibold'>City:</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            value={city}
                        />
                    </Form.Group>

                    <Form.Group className='mt-3'>
                        <Form.Label className='fw-semibold'>Your Postal Code:</Form.Label>
                        <Form.Control
                            onChange={(e) => setPostalCode(e.target.value)}
                            type="text"
                            placeholder="Your postal code..."
                            value={postalCode}
                        />
                    </Form.Group>

                    {errorMsg && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {errorMsg}
                        </div>
                    )}

                    <Button
                        type='submit'
                        disabled={loading || !hasEstimate}
                        className='btn btn-block w-100 mb-5 mt-3'
                        style={{ backgroundColor: '#075f33' }}
                    >
                        {loading ? 'Sending...' : 'Submit Booking'}
                    </Button>
                </Form>
            )}
        </div>
    );
}