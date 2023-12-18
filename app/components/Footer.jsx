import React from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt, FaEnvelopeOpen, FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsChevronRight } from 'react-icons/bs';
import Subscribe from './Subscribe';

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
                                            <Link href="/"><img src="assets/img/logo/logo.png" className="img-fluid" alt="img not found" /></Link>
                                        </div>
                                        <h4 className="mb-15"><a href="tel:02(850)2560-3">(647)770-2782</a></h4>
                                        <h6 className="mb-15"> <i > <FaEnvelopeOpen /> </i><a href="mailto:info@basictheme.com">info@neatguys.ca</a></h6>
                                        <h6 className="mb-20"> <i> <FaMapMarkerAlt /> </i> 25/B Globe House Ave. Point Beach, New York</h6>
                                        <div className="tp-footer-info-social">
                                            <a href="/"><i><FaFacebookF className='icon' /> </i></a>
                                            <a href="/"><i><BsInstagram className='icon' /> </i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="tp-footer-widget footer-col-2 mb-30 wow fadeInUp" data-wow-delay=".6s">
                                    <h4 className="tp-footer-widget-title mb-35">Our Services</h4>
                                    <ul>
                                        <li><BsChevronRight
                                            color='white' /><a href="#">Carpet Cleaning</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="#">Plumbing Serivices</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="#">Park Cleaning</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="#">Residential Services</a></li>
                                        <li><BsChevronRight
                                            color='white' /><a href="#">Toilet Cleaning</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="tp-footer-widget footer-col-3 mb-30 wow fadeInUp" data-wow-delay=".9s">
                                    <h4 className="tp-footer-widget-title mb-35">Recent News</h4>
                                    <div className="tp-footer-news">
                                        <div className="tp-footer-news-single mb-15">
                                            <h6><Link href="/blogDetails">Orci magna pede, quisque sociis integer litora netus</Link></h6>
                                            <span>Jun 02, 2021</span>
                                        </div>
                                        <div className="tp-footer-news-single">
                                            <h6><Link href="/blogDetails">Congue morbi elit dictumst socio sit mauris congue sed.</Link></h6>
                                            <span>Jun 02, 2021</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="tp-footer-widget footer-col-4 mb-30 wow fadeInUp" data-wow-delay="1.2s">
                                    <h4 className="tp-footer-widget-title mb-40">Instagram</h4>
                                    <div className="tp-footer-insta">
                                        <a href="/">
                                            <img src="assets/img/footer/footer-insta-1.jpg" className="img-fluid" alt="img not found" />
                                        </a>
                                        <a href="/">
                                            <img src="assets/img/footer/footer-insta-2.jpg" className="img-fluid" alt="img not found" />
                                        </a>
                                        <a href="/">
                                            <img src="assets/img/footer/footer-insta-3.jpg" className="img-fluid" alt="img not found" />
                                        </a>
                                        <a href="/">
                                            <img src="assets/img/footer/footer-insta-4.jpg" className="img-fluid" alt="img not found" />
                                        </a>
                                        <a href="/">
                                            <img src="assets/img/footer/footer-insta-5.jpg" className="img-fluid" alt="img not found" />
                                        </a>
                                        <a href="/">
                                            <img src="assets/img/footer/footer-insta-6.jpg" className="img-fluid" alt="img not found" />
                                        </a>
                                    </div>
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
                                    <p className="m-0">Copyright ©2024 <span>Rav Link Inc.</span>. All Rights Reserved Copyright</p>
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