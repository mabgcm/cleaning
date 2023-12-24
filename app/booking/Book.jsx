'use client'
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';



const PAYMENT_100 = 'https://buy.stripe.com/test_8wMaGigJNaeOg4E9AB';
const PAYMENT_150 = 'https://buy.stripe.com/test_aEU9Ce3X1ev42dO144';
const PAYMENT_200 = 'https://buy.stripe.com/test_cN201E2SX2Mm05G28a';
const PAYMENT_250 = 'https://buy.stripe.com/test_aEU01E1OT0Ee4lWdQT';


export default function Book() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const booking = searchParams.get('booking');
    const estimate = JSON.parse(booking)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [adress, setAdress] = useState("")
    const [city, setCity] = useState(estimate.city || "")
    const [postalCode, setPostalCode] = useState("")
    const [bedrooms, setBedrooms] = useState(estimate.bedrooms || "")
    const [bathrooms, setBathrooms] = useState(estimate.bathrooms || "")
    const [squareFeetRange, setSquareFeetRange] = useState(estimate.squareFeetRange || "")
    const [cleaningItems, setCleaningItems] = useState(estimate.cleaningItems || "")
    const [cleaningType, setCleaningType] = useState(estimate.cleaningType || "")
    const [date, setDate] = useState(estimate.date || "")
    const [totalAmount, setTotalAmount] = useState(estimate.totalAmount || "");
    const [paid, setPaid] = useState(false);
    const [completed, setCompleted] = useState(false);



    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await fetch("https://neatguys.ca/api", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    cleaningType,
                    name,
                    phone,
                    email,
                    adress,
                    city,
                    postalCode,
                    bedrooms,
                    bathrooms,
                    squareFeetRange,
                    cleaningItems,
                    date,
                    totalAmount,
                    paid,
                    completed
                })
            });
            if (res.ok) {
                const paymentLink = getPaymentLink();
                router.push(getPaymentLink());
            } else {
                throw new Error("Failed to complete the booking")
            }
        } catch (error) {
            // Handle error, if needed
        } finally {
            setLoading(false); // Set loading back to false after the operation is complete
        }
    };

    const getPaymentLink = () => {
        const amount = parseFloat(totalAmount);

        if (amount === 100) {
            return PAYMENT_100;
        } else if (amount === 150) {
            return PAYMENT_150;
        } else if (amount === 200) {
            return PAYMENT_200;
        } else if (amount === 250) {
            return PAYMENT_250;
        }

        // Default to a generic payment link if the amount doesn't match any specific values
        return PAYMENT_100;
    };

    const getCleaningTypeName = (cleaningType) => {
        switch (cleaningType) {
            case 'deep':
                return 'Deep Cleaning';
            case 'movein':
                return 'Move In / Out Cleaning';
            case 'office':
                return 'Office Cleaning';
            case 'regular':
                return 'Regular Cleaning';
            case 'onetime':
                return 'One-time Cleaning';
            case 'airbnb':
                return 'Airbnb Cleaning';
            default:
                return '';
        }
    };

    const getCleaningItemsName = (cleaningItems) => {
        switch (cleaningItems) {
            case 'cupboardsin':
                return ' Cleaning Inside the Kitchen Cupboards';
            case 'ovenin':
                return 'Cleaning Inside the Oven';
            case 'fridge':
                return 'Cleaning Inside the Fridge';
            case 'dish':
                return 'Hand-washing everything in the sink';
            case 'dishwasher':
                return 'Loading / Unloading the Dishwasher';
            case 'wall':
                return 'Cleaning the Walls';
            case 'windows':
                return 'Cleaning the Windows Glass from Inside';
            case 'baseboard':
                return 'Cleaning the Baseboards';
            default:
                return '';
        }
    };

    return (
        <div className='col-11 mx-auto'>



            <Form onSubmit={handleSubmit} className='py-3'>
                <div>
                    Enter your details for the {getCleaningTypeName(cleaningType)} Package for a {squareFeetRange && `${squareFeetRange} square feet area with ${bedrooms} bedroom(s)`} {bathrooms && `and ${bathrooms} bathroom(s)`} {cleaningItems && cleaningItems.length > 0 && `, including the extra ${cleaningItems.map(item => getCleaningItemsName(item)).join(', ')} item(s)`}. The service is scheduled for {date && `${date},`} with a total amount of C${totalAmount}.00.
                </div>

                <Form.Group>
                    <Form.Label>Your Name:</Form.Label>
                    <Form.Control
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Full Name"
                        value={name}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Phone Number:</Form.Label>
                    <Form.Control
                        onChange={(e) => setPhone(e.target.value)}
                        type="text"
                        placeholder="Phone number to contact"
                        value={phone}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Email:</Form.Label>
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Your email"
                        value={email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Adress:</Form.Label>
                    <Form.Control
                        onChange={(e) => setAdress(e.target.value)}
                        type="text"
                        placeholder="The adress of the cleaning"
                        value={adress}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>City:</Form.Label>
                    <Form.Control
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        placeholder="Phone number to contact"
                        value={city}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Your Postal Code:</Form.Label>
                    <Form.Control
                        onChange={(e) => setPostalCode(e.target.value)}
                        type="text"
                        placeholder="Postal Code"
                        value={postalCode}
                    />
                </Form.Group>
                <Button type='submit' disabled={loading} className='btn btn-block w-100 mb-5 mt-3' style={{ backgroundColor: '#075f33' }}>
                    {loading ? 'Processing...' : 'Go to Payment'}
                </Button>

            </Form>
        </div>
    );
}
