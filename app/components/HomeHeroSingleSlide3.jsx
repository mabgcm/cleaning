import { MotionAnimate } from 'react-motion-animate'
import BookNow from './BookNow';

const HomeHeroSingleSlide3 = () => {

    return (
        <>
            <div className="tp-single-slider tp-slider-height d-flex align-items-center swiper-slide" data-swiper-autoplay="5000">
                <div className="slide-bg">
                    <img src="assets/img/slider/slider-bg-3.jpg" alt="" />
                </div>
                <div className="slider-img">
                    <img src="assets/img/slider/slider-img-3.png" className="img-fluid" alt="img not found" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tp-slider-wrapper mt-60 position-relative">

                                <div className="tp-slider z-index">

                                    <div>
                                        <h5 className="tp-slider-subtitle section__sm__title common-yellow-shape w-80 mb-35">Tailored services for a uniquely clean space</h5>
                                    </div>

                                    <h1 className="tp-slider-title mb-45">
                                        <MotionAnimate
                                            animation='fadeInUp'
                                            reset={true}
                                            distance={200}
                                            delay={0.5}
                                            speed={1}>
                                            <div >Specialized</div>
                                        </MotionAnimate>

                                        <MotionAnimate
                                            animation='fadeInUp'
                                            reset={true}
                                            distance={200}
                                            delay={0.6}
                                            speed={1}>
                                            <div >Care for</div>
                                        </MotionAnimate>

                                        <MotionAnimate
                                            animation='fadeInUp'
                                            reset={true}
                                            distance={200}
                                            delay={0.7}
                                            speed={1}>
                                            <div >Every Corner</div>
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

export default HomeHeroSingleSlide3;