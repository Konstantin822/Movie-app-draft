import React from "react";
import { useQuery } from "@apollo/client";
import { GET_HOME_DATA } from '../../data/HomeData.jsx'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Autoplay } from 'swiper/modules'

export default function CardSwiper() {
    // const { data, isLoading } = useFetch('http://localhost:1338/api/home-data-apis')
    // console.log(data)
    // const card = data.map(item => 
    // )

    const { loading, error, data } = useQuery(GET_HOME_DATA);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(data)

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay: 2500,
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
            {data.homeDataApis.data.map(item => (
                <SwiperSlide>
                    <img src={item.attributes.img.data.attributes.url} alt="Image" />
                </SwiperSlide>))}
            {/* <SwiperSlide>
                <img src="/images/creator.jpg" alt="Image" />
            </SwiperSlide> */}
        </Swiper>
    );
}