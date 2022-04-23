import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "../style/FondoCarrusel.scss"
import useFetchCarrusel from '../Hooks/useFetchCarrusel';

const Carrusel = () => {
  const info = useFetchCarrusel()
  return (
    <Swiper className='fondo-carrusel'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {info?.map((movie) =>
       
        
      
      <SwiperSlide><img className='fondo-imagen-carrusel'   src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}alt=""/>
      <h3>{movie.title}</h3>
      </SwiperSlide>
        
      )}




    </Swiper>
  );
};

export default Carrusel