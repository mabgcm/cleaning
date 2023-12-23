import Link from 'next/link'
import { MotionAnimate } from 'react-motion-animate'

const HomeHeroSingleSlide = () => {

    return (
        <>
            <div className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg">
                    <img src="assets/img/slider/slider-bg-1.jpg" alt="" />
                </div>
                <div className="slider-img">
                    <img src="assets/img/slider/slider-img-1.jpg" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-wrapper mt-60 position-relative">

                                <div className="tp-slider z-index">

                                    <div>
                                        <h5 className="tp-slider-subtitle section__sm__title common-yellow-shape w-80 mb-35">Experience the joy of your valuable moments</h5>
                                    </div>

                                    <h1 className="tp-slider-title mb-45">
                                        <MotionAnimate
                                            animation='fadeInUp'
                                            reset={true}
                                            distance={200}
                                            delay={0.5}
                                            speed={1}>
                                            <div >Save your</div>
                                        </MotionAnimate>

                                        <MotionAnimate
                                            animation='fadeInUp'
                                            reset={true}
                                            distance={200}
                                            delay={0.6}
                                            speed={1}>
                                            <div >time with</div>
                                        </MotionAnimate>

                                        <MotionAnimate
                                            animation='fadeInUp'
                                            reset={true}
                                            distance={200}
                                            delay={0.7}
                                            speed={1}>
                                            <div >Neat Guys</div>
                                        </MotionAnimate>
                                    </h1>

                                    <div className="tp-slider-btn">
                                        <div >
                                            <Link href="/about" className="theme-btn text-white">
                                                <i className="flaticon-enter"></i>Book Now!</Link>
                                        </div>
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

export default HomeHeroSingleSlide;