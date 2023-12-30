import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelopeOpen, FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsChevronRight } from 'react-icons/bs';
import { FaPhoneVolume } from "react-icons/fa6";

import logo from '../../public/assets/img/logo/logo.png'

const Footer = () => {
    return (
        <>
            <footer className="theme-dark-bg">
                <div className="tp-footer-area-two pt-80 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="tp-footer-widget footer-col-1 mb-30 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="tp-footer-info">
                                        <div className="tp-footer-info-logo mb-35">
                                            <Link href="/"><Image src={logo} className="img-fluid" alt="img not found" /></Link>
                                        </div>
                                        <h4 className="mb-15"><a href="tel:6477702782"> <FaPhoneVolume /> (647)770-2782</a></h4>
                                        <h6 className="mb-15 d-block"> <i > <FaEnvelopeOpen size='20px' /> </i><a href="mailto:info@neatguys.ca">info@neatguys.ca</a></h6>
                                        <h6 className="mb-20"> <i> <FaMapMarkerAlt size='20px' /> </i> 173 Hickling Trail, Barrie</h6>
                                        <div className="tp-footer-info-social">
                                            <a href="https://www.facebook.com/neatguys.ca"><i><FaFacebookF className='icon' /> </i></a>
                                            <a href="https://www.instagram.com/neatguys.ca"><i><BsInstagram className='icon' /> </i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp" data-wow-delay=".6s">
                                    <h4 className="tp-footer-widget-title mb-35">Our Services</h4>
                                    <ul>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/packages/deepclean">Deep Cleaning</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/packages/move">Move In / Out Cleaning</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/packages/office">Office Cleaning</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/packages/regular">Regular Cleaning</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/packages/onetime">One-Time Cleaning</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/packages/airbnb">AirBNB Cleaning</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp" data-wow-delay=".6s">
                                    <h4 className="tp-footer-widget-title mb-35">Site Map</h4>
                                    <ul>
                                        <li><BsChevronRight
                                            color='white' /><a href="/">Home</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/about">About Us</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/services">Packages</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/process">How To Book</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/estimate">Booking</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="https://8fu286als2z.typeform.com/to/welhawPP" target='__blank'>Join Us</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="/home/contact">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="tp-copyright-area-two bg-green-light z-index pt-30 pb-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="tp-copyright tp-copyright-two text-center">
                                    <p className="m-0">Copyright ©2024 <Link href='ravlink.ca' target='__blank'><span>Rav Link Inc.</span></Link>. All Rights Reserved Copyright</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;