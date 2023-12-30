import React from 'react';
import Image from 'next/image';
import img1 from '../../public/assets/img/testimonial/author-4.png';
import img2 from '../../public/assets/img/icon/test-qoute.png';
import { FaStar } from "react-icons/fa";

const Testimonial3 = () => {
    return (
        <>
            <div className="tp-testimonial-single swiper-slide z-index">
                <p className="mb-45">I'm all about efficiency, and these guys nailed it. The estimate was quick, payment smoother than my morning coffee routine. The team was like a whirlwind—fast and thorough. My place looked top-notch, and they even fixed a thing I didn't notice. Two thumbs up.</p>
                <div className="tp-testimonial-author">
                    <div className="tp-testimonial-author-img">
                        <Image src={img1} className="img-fluid" alt="img not found" />
                    </div>
                    <div className="tp-testimonial-author-text">
                        <h4 className="tp-testimonial-author-text-name">Carlos M.</h4>
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

export default Testimonial3;