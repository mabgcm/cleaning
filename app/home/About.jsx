import Link from 'next/link';
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineStorefront } from "react-icons/md";


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
                                        About our Company</h5>
                                    <h2 className="tp-section-title">Our Success Cleaning <br />Up your Mess</h2>
                                </div>
                                <p className="mb-40">Can consent to the use of such technologies byclosing this notice senectus amet sodales habitant dapibus </p>
                                <div className="row mb-10">
                                    <div className="col-sm-6">
                                        <div className="tp-about-service mb-30">
                                            <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                                <GiFamilyHouse
                                                    size='50px'
                                                />
                                            </div>
                                            <div className="tp-about-service-text">
                                                <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                                    <Link href="/services">Residential Cleaning Services</Link></h4>
                                                <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="tp-about-service mb-30">
                                            <div className="tp-about-service-icon yellow-circle-shape mb-15">
                                                <MdOutlineStorefront
                                                    size='50px'
                                                />
                                            </div>
                                            <div className="tp-about-service-text">
                                                <h4 className="tp-about-service-text-title mb-15 hover-theme-color">
                                                    <Link href="/services">Commercial Cleaning Services</Link></h4>
                                                <p>Duis congue atend lorem consequat interdum pretium ligula semper</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutArea;