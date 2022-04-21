import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carrusel = () => {
  return (
    <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide></SwiperSlide>
      
      <SwiperSlide><img src='https://placekitten.com/400'alt=""/></SwiperSlide>
      <SwiperSlide><img src='https://placekitten.com/400'alt=""/></SwiperSlide>
      <SwiperSlide><img src='https://placekitten.com/400'alt=""/></SwiperSlide>
      
    </Swiper>
  );
};

export default Carrusel