import React from 'react';
import Image from 'next/image';
import img1 from '../../public/assets/img/testimonial/author-5.png';
import img2 from '../../public/assets/img/icon/test-qoute.png';
import { FaStar } from "react-icons/fa";

const Testimonial4 = () => {
    return (
        <>
            <div className="tp-testimonial-single swiper-slide z-index">
                <p className="mb-45">Cleaning day was stress-free. Got the estimate, paid online, and let them do their thing. The team was careful and respectful of my space. Gave feedback, they listened, and boom – it was sorted. Easy-peasy. Definitely calling them again!</p>
                <div className="tp-testimonial-author">
                    <div className="tp-testimonial-author-img">
                        <Image src={img1} className="img-fluid" alt="img not found" />
                    </div>
                    <div className="tp-testimonial-author-text">
                        <h4 className="tp-testimonial-author-text-name">Laura K.</h4>
                        <span className="tp-testimonial-author-text-designation"><FaStar color='#FFC000' /><FaStar color='#FFC000' /><FaStar color='#FFC000' /><FaStar color='#FFC000' /><FaStar color='#FFC000' />
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

export default Testimonial4;