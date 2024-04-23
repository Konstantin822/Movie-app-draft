// import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_HOME_DATA } from '../../data/HomeData.jsx'

// import Carousel from '../../components/Carousel/Carousel.jsx';
// import Frame from '../../components/Frame/Frame.jsx';

// export default function Home() {

//     const { loading, error, data } = useQuery(GET_HOME_DATA);
//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error: {error.message}</p>
//     console.log(data)

//     return (
//         <>
//             <section className="hero">
//                 <div className="container hero__container">
//                     <img src="/covers/kong.jpeg" alt="Background Image" className="hero__bg" />
//                     <div className="hero__card">
//                         <h1 className="hero__card-title">Title</h1>
//                         <h4 className="hero__card-desc1">
//                             <span>type</span>
//                             <span>rating</span>
//                             <span>date</span>
//                             <span>time</span>
//                             <span>genre</span>
//                         </h4>
//                         <p className="hero__card-desc2">
//                             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                             Necessitatibus eum mollitia quam corporis quaerat earum totam vitae odit, eligendi, id consequuntur magni facilis asperiores placeat suscipit cupiditate perferendis consectetur voluptates?
//                         </p>
//                         <h4 className="hero__card-desc3">
//                             <span>Tags:</span>
//                             <span>Starring:</span>
//                         </h4>
//                         <div className="hero__buttons">
//                             <a href="#" className="hero__buttons-btn">Watch trailer</a>
//                             <a href="" className="hero__buttons-btn">Watch video</a>
//                         </div>
//                         <Frame />
//                     </div>
//                 </div>
//             </section>

//             <section className="carousel">
//                 <div className="container carousel__container">
//                     <Carousel />
//                 </div>
//             </section>
//         </>
//     );
// }


// import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_HOME_DATA } from '../../data/HomeData.jsx'

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/effect-coverflow';

// import { EffectCoverflow, Autoplay } from 'swiper/modules'

// export default function CardSwiper() {

//     const { loading, error, data } = useQuery(GET_HOME_DATA);
//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error: {error.message}</p>
//     console.log(data)

//     return (
//         <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             autoplay={{
//                 delay: 2000,
//                 disableOnInteraction: false,
//             }}
//             coverflowEffect={{
//                 rotate: 50,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 1,
//                 slideShadows: true,
//             }}
//             loop={true}
//             modules={[EffectCoverflow, Autoplay]}
//             className="cardSwiper"
//         >
//             {data.homeDataApis.data.map(item => (
//                 <SwiperSlide key={item.id}>
//                     <img src={`http://localhost:1338${item.attributes.img.data.attributes.url}`} alt="Image" />
//                 </SwiperSlide>))}
//         </Swiper>
//     );
// }







// import React from "react";

// import { useQuery } from "@apollo/client";
// import { GET_HOME_DATA } from '../../data/HomeData.jsx'

// import Carousel from '../../components/Carousel/Carousel.jsx';
// import Frame from '../../components/Frame/Frame.jsx';

// const API_URL = 'http://localhost:1338'

// export default function Home() {

//     const { loading, error, data } = useQuery(GET_HOME_DATA);

//     if (loading) return <p>Loading...</p>
//     if (error) return <p>Error: {error.message}</p>

//     console.log(data)

//     const cardChange = id => (
//         console.log(id)
//     )

//     return (
//         <>
//             <section className="hero">
//                 <div className="container hero__container">
//                     <img src="/covers/kong.jpeg" alt="Background Image" className="hero__bg" />
//                     <div className="hero__card">
//                         <h1 className="hero__card-title">Title</h1>
//                         <h4 className="hero__card-desc1">
//                             <span>type</span>
//                             <span>rating</span>
//                             <span>date</span>
//                             <span>time</span>
//                             <span>genre</span>
//                         </h4>
//                         <p className="hero__card-desc2">
//                             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                             Necessitatibus eum mollitia quam corporis quaerat earum totam vitae odit, eligendi, id consequuntur magni facilis asperiores placeat suscipit cupiditate perferendis consectetur voluptates?
//                         </p>
//                         <h4 className="hero__card-desc3">
//                             <span>Tags:</span>
//                             <span>Starring:</span>
//                         </h4>
//                         <div className="hero__buttons">
//                             <a href="#" className="hero__buttons-btn">Watch trailer</a>
//                             <a href="" className="hero__buttons-btn">Watch video</a>
//                         </div>
//                         <Frame />
//                     </div>
//                 </div>
//             </section>

//             <section className="carousel">
//                 <div className="container carousel__container">
//                     <Carousel data={data} apiUrl={API_URL} cardChange={cardChange} />
//                 </div>
//             </section>
//         </>
//     );
// }

// import React from "react";

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css/effect-coverflow';

// import { EffectCoverflow, Autoplay } from 'swiper/modules'

// export default function Carousel({ data, apiUrl, cardChange }) {

//     return (
//         <Swiper
//             effect={'coverflow'}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={'auto'}
//             autoplay={{
//                 delay: 3000,
//                 disableOnInteraction: false,
//             }}
//             coverflowEffect={{
//                 rotate: 50,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 1,
//                 slideShadows: true,
//             }}
//             loop={true}
//             modules={[EffectCoverflow, Autoplay]}
//             className="cardSwiper"
//         >
//             {
//                 data.homeDataApis.data.map(item => (
//                     <SwiperSlide key={item.id}>
//                         <img src={`${apiUrl}${item.attributes.img.data.attributes.url}`}
//                             alt="Image"
//                             onClick={() => cardChange(item.id)} />
//                     </SwiperSlide>
//                 ))
//             }
//         </Swiper>
//     );
// }