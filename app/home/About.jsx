import Link from 'next/link';
import { TbShieldHeart } from "react-icons/tb";
import { BsCardChecklist } from "react-icons/bs";



const AboutArea = () => {
    return (
        <>
            <section className="tp-about-area position-relative pt-120 pb-90 fix">
                <div className="tp-about-shape">
                    <img src="assets/img/about/about-shape-1.jpg" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row justify-content-xl-between justify-content-md-center">
                        <div className="col-xl-5 col-12">
                            <div className="tp-about-img z-index wow fadeInUp" data-wow-delay=".3s">
                                <img src="assets/img/about/about-img-3.png" alt="img not found" />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-10">
                            <div className="tp-about-text z-index wow fadeInUp" data-wow-delay=".6s">
                                <div className="section-title-wrapper mb-30">
                                    <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20">
                                        Professional Cleaning Service For Your Home</h5>
                                    <h2 className="tp-section-title">Your Trusted Cleaning Partner <br />in Barrie, Orillia & Innisfil</h2>
                                </div>
                                <p className="mb-40">Tired of spending your time cleaning when you could be doing the things you love? Meet The Neat Guys, your go-to professional cleaning company in Barrie, ready to serve you. With a professional approach, our expert home cleaners deliver comprehensive and detail-oriented cleanings every visit, ensuring you come home to the spotless haven you deserve.</p>
                                <div className="row mb-10">
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="tp-about-service mb-30">
                                            <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                                <TbShieldHeart
                                                    size='48px'
                                                />
                                            </div>
                                            <div className="tp-about-service-text">
                                                <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                                    <Link href="/services">Worry-Free Guarantee</Link></h4>
                                                <p>We stand by our work. If you're not satisfied, give us a call within 24 hours, and we'll address any issues for free.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div className="tp-about-service mb-30">
                                            <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                                <BsCardChecklist
                                                    size='48px'
                                                />
                                            </div>
                                            <div className="tp-about-service-text">
                                                <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                                    <Link href="/services">Customized Cleaning Services</Link></h4>
                                                <p>Tailor our services to fit your unique needs and preferences. Your satisfaction is our top priority.</p>
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