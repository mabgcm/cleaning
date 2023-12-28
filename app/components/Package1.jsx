import React from 'react';
import Link from 'next/link';
import { HiPlus } from 'react-icons/hi';
import Image from 'next/image';
import img1 from '../../public/assets/img/service/deepclean.jpg';
import icn1 from '../../public/assets/img/icon/deepclean.png';

const Package1 = ({ title }) => {
    return (
        <>
            <div className="col-xl-4 col-md-6">
                <div className="tp-quality mb-30 wow fadeInUp" data-wow-delay=".5s">
                    <div className="tp-quality-img">
                        <Image src={img1} className="img-fluid" alt="img not found" />
                    </div>
                    <div className="tp-quality-text text-center">
                        <div className="tp-quality-text-icon mb-10">
                            <Link href="/home/packages/deepclean">
                                <Image className="tp-quality-text-icon1" src={icn1} alt="Deep clean icon" />
                                <i className="tp-quality-text-icon2"><HiPlus className="text-white" /></i>
                            </Link>
                        </div>
                        <span>Residential</span>
                        <h4 className="tp-quality-text-title m-0"><Link href="/home/packages/deepclean">{title}</Link></h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Package1;