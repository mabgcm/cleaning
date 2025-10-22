import { MotionAnimate } from 'react-motion-animate'
import BookNow from './BookNow';
import Image from 'next/image';
import img1 from '../../public/assets/img/slider/slider-bg-2.jpg';
import img2 from '../../public/assets/img/slider/slider-img-2.jpg';

const HomeHeroSingleSlide2 = () => {

    return (
        <>
            <div className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg">
                    <Image src={img1} alt="" />
                </div>
                <div className="slider-img">
                    <Image src={img2} className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-wrapper mt-60 position-relative">

                                <div className="tp-slider z-index">

                                    <div>
                                        <h5 className="tp-slider-subtitle section__sm__title common-yellow-shape w-80 mb-35">Deep cleaning beyond the surface.</h5>
                                    </div>

                                    <h1 className="tp-slider-title mb-45">
                                        <MotionAnimate
                                            animation='fadeInUp'
                                            reset={true}
                                            distance={200}
                                            delay={0.5}
                                            speed={1}>
                                            <div >Steam</div>
                                        </MotionAnimate>

                                        <MotionAnimate
                                            animation='fadeInUp'
                                            reset={true}
                                            distance={200}
                                            delay={0.6}
                                            speed={1}>
                                            <div >Powered</div>
                                        </MotionAnimate>

                                        <MotionAnimate
                                            animation='fadeInUp'
                                            reset={true}
                                            distance={200}
                                            delay={0.7}
                                            speed={1}>
                                            <div >Freshness!</div>
                                        </MotionAnimate>
                                    </h1>

                                    <div className="tp-slider-btn">
                                        <BookNow />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeroSingleSlide2;