'use client'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen } from 'react-icons/fa';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const notifySuccess = () =>
        toast.success("Message sent successfully!", {
            position: toast.POSITION.TOP_RIGHT
        });

    const notifyError = (msg) =>
        toast.error(msg || "Failed to send message. Please try again.", {
            position: toast.POSITION.TOP_RIGHT
        });

    const sendEmail = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.error || "Request failed");
            }

            notifySuccess();
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        } catch (err) {
            notifyError(err?.message);
        } finally {
            setSubmitting(false);
        }
    };
    return (
        <>
            <section className="tp-contact-area mt-4 pb-120">
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
                                            <p>4 Spice Way L9J 0M2<br />Barrie ON</p>
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
                                            <a href="tel:9059047101">(905)904-7101</a>
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
                                            <a href="mailto:info@themepure.com">brinovacleaning@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="tp-contact-form">
                                <form onSubmit={sendEmail}>
                                    <div className="row custom-mar-20">
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input
                                                    type="text"
                                                    placeholder="Full name"
                                                    name='name'
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <select
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                >
                                                    <option disabled value="">Choose Subject</option>
                                                    <option value="deep">Deep Cleaning</option>
                                                    <option value="move">Move-In / Move-Out Cleaning</option>
                                                    <option value="office">Office Cleaning</option>
                                                    <option value="regular">Regular Cleaning</option>
                                                    <option value="onetime">One-Time Cleaning</option>
                                                    <option value="airbnb">AirBNB Cleaning</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-12 custom-pad-20">
                                            <div className="tp-contact-form-field mb-20">
                                                <textarea
                                                    name="message"
                                                    placeholder="Your Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12 custom-pad-20">
                                            <div className="tp-contact-form-field">
                                                <button
                                                    type="submit"
                                                    className="theme-btn text-white"
                                                    disabled={submitting}
                                                >
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
