'use client'
import React, { useState } from 'react';
// import "swiper/css";
// import "swiper/css/pagination"
// import SwiperCore, { Pagination, Autoplay, A11y, EffectFade, EffectCards } from 'swiper';
import { Carousel } from 'react-bootstrap';
import HomeHeroSingleSlide from './HomeHeroSingleSlide';
import HomeHeroSingleSlide2 from './HomeHeroSingleSlide2';

// install Swiper modules
// SwiperCore.use([Pagination, Autoplay, A11y, EffectFade, EffectCards]);


const HeroSection = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="tp-slider-area fix">
                <div className="tp-slider-active home_hero_slide swiper-container common-dots">


                    <Carousel interval={3000} fade={true} indicators={true}>
                        <Carousel.Item>
                            <HomeHeroSingleSlide setOpen={setOpen} />
                        </Carousel.Item>

                        <Carousel.Item>
                            <HomeHeroSingleSlide2 setOpen={setOpen} />
                        </Carousel.Item>

                        <Carousel.Item>
                            <HomeHeroSingleSlide setOpen={setOpen} />
                        </Carousel.Item>

                    </Carousel>

                    <div className="swiper-paginations slide-dots"></div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;