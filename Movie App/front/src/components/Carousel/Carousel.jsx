import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Autoplay } from 'swiper/modules'

export default function Carousel({ data, apiUrl }) {

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
            className="cardSwiper"
        >
            {
                data.homeDataApis.data.map(item => (
                    <SwiperSlide key={item.id}>
                        <img src={`${apiUrl}${item.attributes.img.data.attributes.url}`} alt="Image" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}