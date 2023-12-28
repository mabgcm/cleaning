import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icn1 from '../../public/assets/img/icon/cupboard.png';



const HomeServiceItem1 = ({ title }) => {
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
                        <p className="mb-20 itemstext">Revitalize your kitchen with our expert cupboard interior cleaning. We empty and clean inside your cupboards, meticulously placing items back. While the cupboard interiors sparkle, individual items remain untouched.</p>
                        <div className="tp-services-text-link">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeServiceItem1;