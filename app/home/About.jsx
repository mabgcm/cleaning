import Link from 'next/link';
import Image from 'next/image';
import { TbShieldHeart } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";
import { IoIosPricetags } from "react-icons/io";
import { RiSecurePaymentFill } from "react-icons/ri";
// import img1 from '../../public/assets/img/about/about-img-2.jpg';
import img2 from '../../public/assets/img/about/about-img-3.png';



const AboutArea = () => {
    return (
        <>
            <section className="tp-about-area position-relative pt-20 pb-10 fix" style={{ backgroundColor: '#EDF3F1' }}>
                <div className="container">
                    <div className="row justify-content-xl-betweenjustify-content-md-center">
                        <div className="col-xl-5 col-12">
                            <div className="tp-about-img z-index wow fadeInUp" data-wow-delay=".3s">
                                <Image src={img2} alt="img not found" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-10">
                            <div className="tp-about-text m-lg-5 z-index wow fadeInUp" data-wow-delay=".6s">
                                <div className="section-title-wrapper mb-30">
                                    <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20">
                                        Professional Cleaning Service For Your Home</h5>
                                    <h2 className="tp-section-title">Your Trusted Cleaning Partner in<br />the North of Toronto</h2>
                                </div>
                                <p className="mb-40">Tired of spending your time cleaning when you could be doing the things you love? Meet The Neat Guys, your go-to professional cleaning company in the North of Toronto, ready to serve you. With a professional approach, our expert home cleaners deliver comprehensive and detail-oriented cleanings every visit, ensuring you come home to the spotless haven you deserve.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-xl-between justify-content-md-center">
                        <div className="col-xl-12 col-md-10">
                            <div className="tp-about-text m-lg-5 z-index wow fadeInUp" data-wow-delay=".6s">

                                <div className="row mb-1">
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="tp-about-service mb-30">
                                            <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                                <TbShieldHeart
                                                    size='48px'
                                                />
                                            </div>
                                            <div className="tp-about-service-text">
                                                <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                                    <Link href="">Worry-Free <br /> Guarantee</Link></h4>
                                                <p>We stand by our work. If you're not satisfied, give us a call within 24 hours, and we'll address any issues for free.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-3">
                                        <div className="tp-about-service mb-30">
                                            <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                                <BsCardChecklist
                                                    size='48px'
                                                />
                                            </div>
                                            <div className="tp-about-service-text">
                                                <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                                    <Link href="">Customized Cleaning Services</Link></h4>
                                                <p>Tailor our services to fit your unique needs and preferences. Your satisfaction is our top priority.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="tp-about-service mb-30">
                                            <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                                <IoIosPricetags
                                                    size='48px'
                                                />
                                            </div>
                                            <div className="tp-about-service-text">
                                                <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                                    <Link href="">Effortless Pricing Experience</Link></h4>
                                                <p>Providing a hassle-free process, our user-friendly website allows you to obtain a quick and accurate price estimate for your cleaning needs – effortlessly.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-lg-3">
                                        <div className="tp-about-service mb-30">
                                            <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                                <RiSecurePaymentFill
                                                    size='48px'
                                                />
                                            </div>
                                            <div className="tp-about-service-text">
                                                <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                                    <Link href="">Crystal-Clear Costs,<br /> No Surprises</Link></h4>
                                                <p>With us, what you see is what you get. Enjoy peace of mind knowing that there are no hidden fees.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default AboutArea;