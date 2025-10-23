'use client'
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import HomeHeroSingleSlide from '../components/HomeHeroSingleSlide';
import HomeHeroSingleSlide2 from '../components/HomeHeroSingleSlide2';
import HomeHeroSingleSlide3 from '../components/HomeHeroSingleSlide3';


const HeroSection = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="tp-slider-area fix">
                <div className="tp-slider-active home_hero_slide swiper-container common-dots">


                    <Carousel interval={3000} fade={true} indicators={true}>
                        <Carousel.Item>
                            <HomeHeroSingleSlide2 setOpen={setOpen} />
                        </Carousel.Item>

                        <Carousel.Item>
                            <HomeHeroSingleSlide setOpen={setOpen} />
                        </Carousel.Item>


                        <Carousel.Item>
                            <HomeHeroSingleSlide3 setOpen={setOpen} />
                        </Carousel.Item>

                    </Carousel>

                    <div className="swiper-paginations slide-dots"></div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;