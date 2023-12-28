// ./app/booking/confirmation/[id]/page.jsx
'use client'
import React, { useEffect, useState } from 'react';

const getConfirmation = async (id) => {
    try {
        const res = await fetch(`http://neatguys.ca/api/${id}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch booking');
        }

        return { booking: await res.json() };
    } catch (error) {
        console.error(error);
        return { error: 'Unable to retrieve booking information' };
    }
};

export default function BookingConfirmation({ booking, error }) {
    if (error) {
        // Display an error message
        return (
            <div>
                <h1>Booking Confirmation</h1>
                <p>Error: {error}</p>
                <p>Client Name: {booking.name}</p>
            </div>
        );
    }

    if (!booking || !booking._id) {
        // If booking is still undefined or does not have _id property
        return (
            <div>
                <h1>Booking Confirmation</h1>
                <p>Error: Unable to retrieve booking information.</p>
            </div>
        );
    }

    // Display the booking information
    return (
        <div>
            <h1>Booking Confirmation</h1>
            <p>Booking ID: {booking._id}</p>
            <p>Name: {booking.name}</p>
            {/* Include other booking details here */}
        </div>
    );
}

// Fetch data on the client side
export async function fetchBooking(id) {
    try {
        const res = await fetch(`http://localhost:3000/api/${id}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch booking');
        }

        return { booking: await res.json() };
    } catch (error) {
        console.error(error);
        return { error: 'Unable to retrieve booking information' };
    }
}

export async function getConfirmationProps({ params }) {
    const { id } = params;
    return fetchBooking(id);
}

export function useConfirmation({ params }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const result = await fetchBooking(params.id);
            setData(result);
            setLoading(false);
        }

        fetchData();
    }, [params.id]);

    return { data, loading };
}
