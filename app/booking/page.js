// "booking/page.js"
'use client'
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import Book from "./Book";



const Booking = () => {
    const searchParams = useSearchParams();
    const booking = searchParams.get('booking');
    const result = JSON.parse(booking)
    console.log(result)

    return (
        <div>
            <h1>Booking Confirmation</h1>
            <div>
                <h5>Bedrooms: {result.bedrooms}</h5>
                <h5>Bathrooms: {result.bathrooms}</h5>
                <h5>Cleaning Items: {result.cleaningItems.join(', ')}</h5>
                <h5>Cleaning Area: {result.squareFeetRange} sqFeet</h5>
                <h5>Location: {result.city}</h5>
                <h5>Appointment Date: {result.date}</h5>
                <h4>Total Amount: CAD{result.totalAmount}</h4>
            </div>
            <Book />
        </div>
    );
}

export default Booking;
