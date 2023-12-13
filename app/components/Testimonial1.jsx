import React from 'react';
// import image from '../../public/assets/img/about/testimonial-img-4.jpg'

const Testimonial1 = () => {
    return (
        <>
            <div className="tp-testimonial-single swiper-slide z-index">
                <p className="mb-45">Erat dapibus interdum consequat eleifend. Porttitor iaculis per lectus ornare dolor pede. Metus urna faucibus montes duis conds imentum congue. Accumsan bibendum pharetra a quisque nulla dictumst quam praesent pharetra cos aptent sociosqu. Imperdiet mattis sociosqu differ frome aliquam.</p>
                <div className="tp-testimonial-author">
                    <div className="tp-testimonial-author-img">
                        <img src={"assets/img/testimonial/author-2.png"} className="img-fluid" alt="img not found" />
                    </div>
                    <div className="tp-testimonial-author-text">
                        <h4 className="tp-testimonial-author-text-name">John Doe</h4>
                        <span className="tp-testimonial-author-text-designation">Manager</span>
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