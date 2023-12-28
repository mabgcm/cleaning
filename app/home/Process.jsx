import React from 'react';
import Link from 'next/link';

const Process = () => {
    return (
        <>
            <section className="tp-choose-area position-relative pt-30">
                <div className="tp-choose-yellow-bg"></div>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-6 col-lg-8">
                            <div className="tp-choose z-index">
                                <div className="tp-section-title-wrapper mb-105 wow fadeInUp" data-wow-delay=".2s">
                                    <h5 className="tp-section-subtitle common-yellow-shape common-white-shape section__sm__title">How do we work?</h5>
                                    <h2 className="tp-section-title">4 Simple Steps <br /> to secure your cleaning service</h2>
                                </div>
                                <div className="tp-choose-img mb-40 z-index d-block d-xl-none">
                                    <img src="assets/img/about/choose-img-1.jpg" alt="img not found" />
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="tp-choose-timeline ml-15 mb-30">
                                            <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay=".4s"><h5>1</h5>
                                                <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                                                    <Link href="/servicesDetails">Get Your <br /> Free Estimate</Link>
                                                </h4>
                                                <p>Begin your journey by obtaining a comprehensive and personalized estimate for the services you desire. Specify your service preferences, and our system will generate a tailored price, ensuring transparency and accuracy in every detail.</p>
                                            </div>
                                            <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay=".6s"><h5>2</h5>
                                                <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color">
                                                    <Link href="/servicesDetails">Confirm <br /> Your Booking</Link>
                                                </h4>
                                                <p>Once you've received your free estimate and decided on the services that suit your needs, proceed to confirm your booking effortlessly. Simply provide your personal details, and follow our user-friendly process to complete the payment. This ensures a smooth and convenient booking experience, allowing you to secure your reservation quickly and easily.</p>
                                            </div>
                                            <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay=".6s"><h5>3</h5>
                                                <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link href="">Enjoy the Service and<br /> Give Your Feedback</Link></h4>
                                                <p>Sit back, relax, and enjoy the exceptional service you've booked. Your satisfaction is our top priority. After the service is complete, we value your opinion. Share your feedback with us – your insights are crucial in helping us enhance our services and provide an even better experience for our customers. Your feedback contributes to the continuous improvement of our offerings, making future interactions even more tailored to your needs.</p>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <div className="col-sm-6">
                                        <div className="tp-choose-timeline ml-15 mb-30">
                                            <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay="1s"><h5>3</h5>
                                                <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link href="/servicesDetails">Get Your <br /> Final Confirmation</Link></h4>
                                                <p>Cleaning team assesses actual conditions; additional payment required for extra time or specific client requests.</p>
                                            </div>
                                            <div className="tp-choose-timeline-single mb-55 pl-35 wow fadeInUp" data-wow-delay="1.2s"><h5>4</h5>
                                                <h4 className="tp-choose-timeline-single-title mb-15 hover-theme-color"><Link href="/servicesDetails">Confirm the <br /> Service</Link></h4>
                                                <p>Cleaning team assesses actual conditions; additional payment required for extra time or specific client requests.</p>
                                            </div>

                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-12">
                            <div className="tp-choose-img mb-30 z-index d-none d-xl-block wow fadeInUp" data-wow-delay=".6s">
                                <img src="assets/img/about/choose-img-1.jpg" alt="img not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Process;