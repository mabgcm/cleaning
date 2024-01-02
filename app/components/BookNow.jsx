import React from 'react';
import Link from 'next/link';


const BookNow = () => {
    return (
        <div>
            <div >
                <Link href="/home/estimate" className="btn theme-btn">
                    <i className="flaticon-enter"></i> Get Your Free Estimate</Link>
            </div>
        </div>
    )
}

export default BookNow