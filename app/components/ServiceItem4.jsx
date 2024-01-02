import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icn1 from '../../public/assets/img/icon/dishwasher.png';


const HomeServiceItem4 = ({ title }) => {
    return (
        <>
            <div className="col-12 col-sm-6">
                <div className="tp-services white-bg mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div className="col mb-4">
                        <div className="tp-services-icon yellow-circle-shape">
                            <Image src={icn1} alt="cupboard logo" />
                        </div>
                    </div>

                    <div className="col tp-services-text fix">
                        <h4 className="tp-services-text-title mb-15 hover-theme-color pe-none">
                            <Link href="/">{title}</Link></h4>
                        <p className="mb-20 itemstext">Our service covers loading and unloading the dishwasher, ensuring efficient cleaning of your dishes. We handle the placement and removal of items within the dishwasher, optimizing the cleaning process.</p>
                        <div className="tp-services-text-link">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeServiceItem4;