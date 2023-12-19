// "booking/page.js"
'use client'
import { useSearchParams } from "next/navigation";
// import React, { useState, useEffect } from "react";
import Book from "./Book";



const Booking = () => {
    const searchParams = useSearchParams();
    const booking = searchParams.get('booking');
    const result = JSON.parse(booking)
    console.log(result)

    return (
        <div>
            <h1>Booking Confirmation</h1>

            <Book />
        </div>
    );
}

export default Booking;
