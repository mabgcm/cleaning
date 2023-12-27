// "booking/page.js"
'use client'
import { useSearchParams } from "next/navigation";
// import React, { useState, useEffect } from "react";
import Book from "./Book";
import Image from 'next/image'
import img1 from '../../public/assets/img/appoint/bookconfirm.jpg'



const Booking = () => {
    const searchParams = useSearchParams();
    const booking = searchParams.get('booking');
    const result = JSON.parse(booking)
    console.log(result)

    return (
        <div>
            <h4 className="mt-4 text-center">Booking Confirmation</h4>
            <p className="mt-4 fw-semibold text-center">We need some more details to secure your booking!</p>
            <div className="row">
                <div className=" d-none d-md-block col-md-6 centered">
                    <Image
                        src={img1}
                        className="rounded shadow-lg centered m-auto"
                    />
                </div>
                <div className="col-md-6">
                    <Book />
                </div>
            </div>


        </div>
    );
}

export default Booking;
