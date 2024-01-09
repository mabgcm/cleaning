'use client'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';




const Contact = () => {

    const notify = () =>
        toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_RIGHT
        });

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h8b9y09', 'template_lmphi3c2', form.current, 'XUWBIUrOxP9PFb04C')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };
    return (
        <>
            <section className="tp-contact-area pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="section-title-wrapper-two mb-50 wow fadeInUp" data-wow-delay=".2s">
                                <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Let's Talk</h5>
                                <h2 className="tp-section-title heading-color-black">If you Have Any Query, Don’t Hesitate to <br />Contact With Us </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="row custom-mar-20">
                                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                    <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="tp-contact-info-icon">
                                            <i> <FaMapMarkerAlt className='contact_icon' /> </i>
                                        </div>
                                        <div className="tp-contact-info-text">
                                            <h4 className="tp-contact-info-title mb-15">Address</h4>
                                            <p>173 Hickling Trail,<br />Barrie</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                    <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="tp-contact-info-icon">
                                            <i> <FaPhoneAlt className='contact_icon' /> </i>
                                        </div>
                                        <div className="tp-contact-info-text">
                                            <h4 className="tp-contact-info-title mb-15">Phone</h4>
                                            <a href="tel:4372196444">(437)219-6444</a>
                                            <a href="tel:4372196444">(647)770-2782</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-4 col-sm-6 custom-pad-20">
                                    <div className="tp-contact-info mb-40 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="tp-contact-info-icon">
                                            <i > <FaEnvelopeOpen className='contact_icon' /> </i>
                                        </div>
                                        <div className="tp-contact-info-text">
                                            <h4 className="tp-contact-info-title mb-15">Email</h4>
                                            <a href="mailto:info@themepure.com">info@neatguys.ca</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tp-contact-form">
                                <form onSubmit={sendEmail} ref={form}>
                                    <div className="row custom-mar-20">
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input type="text" placeholder="Full name" name='from_name' />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input type="email" name="user_email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input type="text"
                                                    name="user_phone" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <select name="subject">
                                                    <option defaultValue="">Choose Subject</option>
                                                    <option defaultValue="">House Cleaning</option>
                                                    <option defaultValue="">Office Cleaning</option>
                                                    <option defaultValue="">Kitchen Cleaning</option>
                                                    <option defaultValue="">Club Cleaning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <textarea
                                                    name="message"
                                                    placeholder="Your Message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 custom-pad-20">
                                            <div className="tp-contact-form-field">
                                                <button type="submit" onClick={notify} className="theme-btn text-white">
                                                    <i className="flaticon-enter"></i> Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
