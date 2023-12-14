import React from 'react';
import Link from 'next/link';
import { BsCardChecklist } from "react-icons/bs";


const HomeServiceItem2 = ({ title }) => {
    return (
        <>
            <div className="col-xl-4 col-sm-6">
                <div className="tp-services white-bg mb-30 wow fadeInUp" data-wow-delay=".2s">
                    <div className="col mb-4">
                        <div className="tp-services-icon yellow-circle-shape">
                            <img src="assets/img/icon/oven.png" alt="cupboard logo" />
                        </div>
                    </div>

                    <div className="col tp-services-text fix">
                        <h4 className="tp-services-text-title mb-15 hover-theme-color">
                            <Link href="/">{title}</Link></h4>
                        <p className="mb-20">Bras fringilla conubia odios uira metus torquent commodo quam praesent torna pede</p>
                        <div className="tp-services-text-link">
                            <Link href="/"><i className="flaticon-enter"></i> Read Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeServiceItem2;