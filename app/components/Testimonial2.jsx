import React from 'react';
import { FaStar } from "react-icons/fa";

const Testimonial2 = () => {
    return (
        <>
            <div className="tp-testimonial-single swiper-slide z-index">
                <p className="mb-45">So, my place was kinda a disaster zone. But these cleaning wizards worked their magic. The estimate was fair, and they got into every nook. Payment was online, super convenient. The team was friendly, even with my chaos. I'm legit impressed!</p>
                <div className="tp-testimonial-author">
                    <div className="tp-testimonial-author-img">
                        <img src={"assets/img/testimonial/author-3.png"} className="img-fluid" alt="img not found" />
                    </div>
                    <div className="tp-testimonial-author-text">
                        <h4 className="tp-testimonial-author-text-name">Emily R.</h4>
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

export default Testimonial2;