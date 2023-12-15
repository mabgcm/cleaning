import React from 'react';
import Link from 'next/link';
import { HiPlus } from 'react-icons/hi';

const Package5 = ({ title }) => {
    return (
        <>
            <div className="col-xl-4 col-md-6">
                <div className="tp-quality mb-30 wow fadeInUp" data-wow-delay=".5s">
                    <div className="tp-quality-img">
                        <img src={`assets/img/service/onetime.jpg`} className="img-fluid" alt="img not found" />
                    </div>
                    <div className="tp-quality-text text-center">
                        <div className="tp-quality-text-icon mb-10">
                            <Link href="/">
                                <img className="tp-quality-text-icon1" src="assets/img/icon/onetime.png" alt="Deep clean icon" />
                                <i className="tp-quality-text-icon2"><HiPlus className="text-white" /></i>
                            </Link>
                        </div>
                        <span>Residential</span>
                        <h4 className="tp-quality-text-title m-0"><Link href="/">{title}</Link></h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Package5;