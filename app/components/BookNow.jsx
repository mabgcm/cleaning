import React from 'react';
import Link from 'next/link';


const BookNow = () => {
    return (
        <div>
            <div >
                <Link href="sms:+19059047101" className="btn theme-btn">
                    <i className="flaticon-enter"></i> Get Your Free Estimate</Link>
            </div>
        </div>
    )
}

export default BookNow