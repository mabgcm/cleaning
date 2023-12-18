import React from 'react';
import Package1 from 'app/components/Package1';
import Package2 from 'app/components/Package2';
import Package3 from 'app/components/Package3';
import Package4 from 'app/components/Package4';
import Package5 from 'app/components/Package5';
import Package6 from 'app/components/Package6';


const Packages = () => {
    return (
        <>
            <section className="tp-quality-service-area pt-110 bg-gray-light pb-115">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title-wrapper text-center mb-55" data-wow-delay=".2s">
                                <h2 className="tp-section-title-two">Our Service <span>Packages</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-35">

                        <Package1 title="Deep Cleaning" />
                        <Package2 title="Move In / Out" />
                        <Package3 title="Office Cleaning" />
                        <Package4 title="Regular Cleaning" />
                        <Package5 title="One Time" />
                        <Package6 title="AirBNB" />


                    </div>
                </div>
            </section>
        </>
    );
};

export default Packages;