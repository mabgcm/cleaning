import React from 'react';
import Link from 'next/link';


const HomeServiceItem5 = ({ title }) => {
    return (
        <>
            <div className="col-12 col-sm-6">
                <div className="tp-services white-bg mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div className="col mb-4">
                        <div className="tp-services-icon yellow-circle-shape">
                            <img src="assets/img/icon/dishwashing.png" alt="cupboard logo" />
                        </div>
                    </div>

                    <div className="col tp-services-text fix">
                        <h4 className="tp-services-text-title mb-15 hover-theme-color pe-none">
                            <Link href="/">{title}</Link></h4>
                        <p className="mb-20 itemstext">Our hand dishwashing service includes washing all items in the sink, ensuring thorough cleaning of your dishes, utensils, and cookware.





                        </p>
                        <div className="tp-services-text-link">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeServiceItem5;