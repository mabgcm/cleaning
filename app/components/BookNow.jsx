import React from 'react';
import Link from 'next/link';


const BookNow = () => {
    return (
        <div>
            <div >
                <Link href="/home/estimate" className="btn theme-btn text-white">
                    <i className="flaticon-enter"></i> Book Now!</Link>
            </div>
        </div>
    )
}

export default BookNow