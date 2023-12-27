import React from 'react';
import Image from 'next/image';
import img1 from '../../public/assets/img/testimonial/author-2.png'
import { FaStar } from "react-icons/fa";


const Testimonial1 = () => {
    return (
        <>
            <div className="tp-testimonial-single swiper-slide z-index">
                <p className="mb-45">I never thought I'd say this about cleaning, but these guys rock! The estimate was spot-on, no hidden fees. Payment was a breeze, and they made my place shine. Real talk, my expectations were exceeded. When I had a small issue, they fixed it pronto. Happy customer alert!</p>
                <div className="tp-testimonial-author">
                    <div className="tp-testimonial-author-img">
                        <Image src={img1} className="img-fluid" alt="img not found" />
                    </div>
                    <div className="tp-testimonial-author-text">
                        <h4 className="tp-testimonial-author-text-name">Samantha L</h4>
                        <span className="tp-testimonial-author-text-designation"><FaStar color='#FFC000' /><FaStar color='#FFC000' /><FaStar color='#FFC000' /><FaStar color='#FFC000' /><FaStar color='#FFC000' />
                        </span>
                    </div>

                </div>
                <div className="tp-testimonial-qoute">
                    <img src="assets/img/icon/test-qoute.png" alt="img not found" />
                </div>
            </div>
        </>
    );
};

export default Testimonial1;