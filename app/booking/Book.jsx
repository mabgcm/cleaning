'use client'
import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation';


const PAYMENT_100 = 'https://buy.stripe.com/test_8wMaGigJNaeOg4E9AB';
const PAYMENT_150 = 'https://buy.stripe.com/test_aEU9Ce3X1ev42dO144';
const PAYMENT_200 = 'https://buy.stripe.com/test_cN201E2SX2Mm05G28a';
const PAYMENT_250 = 'https://buy.stripe.com/test_aEU01E1OT0Ee4lWdQT';
// function to fetch all the booking data from api

const getBookings = async () => {
    try {
        const res = await fetch("http://localhost:3000/api", { cache: "no-store" });

        if (!res.ok) {
            throw new Error("Failed to fetch from api");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading bookings:", error);
    }
};

export default function Book() {
    const [bookings, setBookings] = useState([]);

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
    const [totalAmount, setTotalAmount] = useState(estimate.totalAmount || "");



    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://cleaning-bugucam-gmailcom.vercel.app/api", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ name, phone, email, adress, city, postalCode, bedrooms, bathrooms, squareFeetRange, cleaningItems, totalAmount })
            });
            if (res.ok) {
                const paymentLink = getPaymentLink();  // Call the function to get the payment link
                router.push(getPaymentLink());
            } else {
                throw new Error("Failed to complete the booking")
            }
        } catch (error) {

        }
    }


    // function to fetch all boking lists: to be used in dashboard
    useEffect(() => {
        const fetchData = async () => {
            const result = await getBookings();
            if (result) {
                setBookings(result.bookings || []);
            }
        };

        fetchData();
    }, []);

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

    return (
        <>
            <Form onSubmit={handleSubmit} className='p-5'>
                <Form.Group>
                    <Form.Label>Bedrooms</Form.Label>
                    <Form.Control
                        onChange={(e) => setBedrooms(e.target.value)}
                        disabled={true}
                        type="text"
                        placeholder="Number of Bedrooms"
                        value={bedrooms}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control
                        onChange={(e) => setBathrooms(e.target.value)}
                        disabled={true}
                        type="text"
                        placeholder="Number of bathrooms"
                        value={bathrooms}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cleaning Area Size</Form.Label>
                    <Form.Control
                        onChange={(e) => setSquareFeetRange(e.target.value)}
                        disabled={true}
                        type="text"
                        placeholder="Square Meters"
                        value={`${squareFeetRange} square feet`}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Extra Items to Clean</Form.Label>
                    <Form.Control
                        onChange={(e) => setCleaningItems(e.target.value)}
                        disabled={true}
                        type="text"
                        placeholder="Items to clean"
                        value={cleaningItems.join(', ')}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Total Amount</Form.Label>
                    <Form.Control
                        onChange={(e) => setTotalAmount(e.target.value)}
                        disabled={true}
                        type="text"
                        placeholder="CAD"
                        value={`CAD ${totalAmount}`}
                    />
                </Form.Group>
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
                <Button type='submit' className='btn btn-success mb-5 mt-3'>Create Booking</Button>

            </Form>






            {/* all bookings listing: to be used in dashboard */}
            {bookings.map((b) => (
                <div key={b._id}>{b.name}</div>
            ))}
        </>
    );
}
