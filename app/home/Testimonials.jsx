'use client'
// Import necessary modules and components
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Testimonial1 from '../components/Testimonial1';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Testimonial2 from 'app/components/Testimonial2';
import Testimonial3 from 'app/components/Testimonial3';
import Testimonial4 from 'app/components/Testimonial4';
import Testimonial5 from 'app/components/Testimonial5';

const Testimonial = () => {
    // State to control modal open/close
    const [isOpen, setOpen] = useState(true);

    return (
        <section className="tp-testimonial-area position-relative py-5" style={{ backgroundColor: "#ECF3F0" }}>
            <div className="container">
                <div className="tp-testimonial-bg white-bg z-index">
                    <div className="row align-items-center">
                        <div className="col-xl-5 col-lg-6 ">
                            <div className="tp-testimonial-img">
                                <img src="assets/img/testimonial/testimonial-img-1.jpg" alt="img bot found" />
                            </div>
                        </div>                        <div className="col-xl-7 col-lg-6">
                            <div className="tp-testimonial ml-70">
                                <div className="section-title-wrapper">
                                    <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20">Our Clients Share Their Shine Bright Cleaning Experiences!</h5>
                                    <h2 className="tp-section-title mb-20">A Symphony of Satisfied Customers</h2>
                                </div>

                                <Carousel
                                    nextIcon={<BsChevronRight />}
                                    prevIcon={<BsChevronLeft />}
                                    interval={6000} // Set your desired interval
                                    controls={false} // Remove default controls
                                >
                                    <Carousel.Item>
                                        <Testimonial1 />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Testimonial2 />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Testimonial3 />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Testimonial4 />
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Testimonial5 />
                                    </Carousel.Item>


                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
