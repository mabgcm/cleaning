// Payment.js
'use client'
import React from 'react';

export default function Payment({ confirmation }) {
    const { name, totalAmount } = confirmation || {};

    return (
        <div>
            <h2>Payment Details</h2>
            <p>Name: {name}</p>
            <p>Total Amount: {totalAmount}</p>
            {/* Add additional details or payment processing logic as needed */}
        </div>
    );
}
