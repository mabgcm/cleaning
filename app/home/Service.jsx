import React from 'react';
import HomeServiceItem1 from '../components/ServiceItem1';
import HomeServiceItem2 from '../components/ServiceItem2';
import HomeServiceItem3 from 'app/components/ServiceItem3';
import HomeServiceItem4 from 'app/components/ServiceItem4';
import HomeServiceItem5 from 'app/components/ServiceItem5';
import HomeServiceItem6 from 'app/components/ServiceItem6';
import HomeServiceItem7 from 'app/components/ServiceItem7';
import HomeServiceItem8 from 'app/components/ServiceItem8';

const ServiceArea = () => {
    return (
        <>
            <section className="tp-services-area theme-dark-bg">
                <div className="tp-custom-container">
                    <div className="tp-services-bg grey-bg pt-50 pb-40 z-index">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="tp-section-title-wrapper text-center mb-55 wow fadeInUp" data-wow-delay=".1s">
                                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-25">Going Above and Beyond With Our Additional Cleaning Offerings</h5>
                                        <h2 className="tp-section-title">Extra Cleaning Items We Cover</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <HomeServiceItem1 title="Cupboards" />
                                <HomeServiceItem2 title="Oven" />
                                <HomeServiceItem3 title="Fridge" />
                                <HomeServiceItem4 title="Dish Washer" />
                                <HomeServiceItem5 title="Dish Washing" />
                                <HomeServiceItem6 title="Windows Interior" />
                                <HomeServiceItem7 title="Cleaning the Wall" />
                                <HomeServiceItem8 title="Baseboards" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceArea;