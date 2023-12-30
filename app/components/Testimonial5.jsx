import React from 'react';
import Image from 'next/image';
import img1 from '../../public/assets/img/testimonial/author-1.png';
import img2 from '../../public/assets/img/icon/test-qoute.png';
import { FaStar } from "react-icons/fa";

const Testimonial5 = () => {
    return (
        <>
            <div className="tp-testimonial-single swiper-slide z-index">
                <p className="mb-45">Alright, I'm a tough critic, but these guys earned their stars. The estimate was fair, no surprises. Payment? Easy. The cleaning crew did a solid job – my place was way cleaner. Had a tiny hiccup, but they fixed it pronto. Not perfect, but pretty darn close. Happy with the service.</p>
                <div className="tp-testimonial-author">
                    <div className="tp-testimonial-author-img">
                        <Image src={img1} className="img-fluid" alt="img not found" />
                    </div>
                    <div className="tp-testimonial-author-text">
                        <h4 className="tp-testimonial-author-text-name">Makhrout H.</h4>
                        <span className="tp-testimonial-author-text-designation"><FaStar color='#FFC000' /><FaStar color='#FFC000' /><FaStar color='#FFC000' /><FaStar color='#FFC000' />
                        </span>
                    </div>

                </div>
                <div className="tp-testimonial-qoute">
                    <Image src={img2} alt="img not found" />
                </div>
            </div>
        </>
    );
};

export default Testimonial5;