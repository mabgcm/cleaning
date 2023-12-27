import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';


const Subscribe = () => {
    return (
        <div>
            <div className="tp-footer-subscribe-area-two position-relative pt-100">
                <div className="container">
                    <div className="tp-footer-subscribe-bg-two theme-yellow-bg pt-30 pb-20 z-index pl-60 pr-60">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-4">
                                <div className="tp-footer-subscribe">
                                    <h3 className="tp-footer-subscribe-title">Subscribe Our Newsletter</h3>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8">
                                <div className="tp-footer-subscribe-form">
                                    <form action="#" className="p-0">
                                        <div className="tp-footer-subscribe-form-field mb-10">
                                            <input type="text" placeholder="Email Address" />
                                            <i ><FaPaperPlane /></i>
                                        </div>
                                        <div className="tp-footer-subscribe-form-btn mb-10">
                                            <button type="submit" className="theme-btn text-white"><i className="flaticon-enter"></i> Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe