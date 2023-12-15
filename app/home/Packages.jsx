import Package1 from 'app/components/Package1';
import React from 'react';
import Link from 'next/link';
import Package2 from 'app/components/Package2';
import Package3 from 'app/components/Package3';
import Package4 from 'app/components/Package4';


const Packages = () => {
    return (
        <>
            <section className="tp-quality-service-area pt-110 bg-gray-light pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-wrapper text-center mb-55" data-wow-delay=".2s">
                                <h2 className="tp-section-title-two">Our Diversified <span>Packages</span>
                                    <br />Cleaning</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-35">

                        <Package1 title="Deep Cleaning" />
                        <Package2 title="Move In / Out" />
                        <Package3 title="After Party" />
                        <Package4 title="Regular Cleaning" />


                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-quality-btn text-center">
                                <Link href="/" className="theme-btn radius-50 text-white">More Services +</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Packages;