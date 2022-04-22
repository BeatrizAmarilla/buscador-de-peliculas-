import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import useFetchPelis from '../Hooks/useFetchPelis';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardCarrusel from "./CardCarrusel";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carrusel = () => {

  const [info] = useFetchPelis("popular","Es")

  return (
    <Swiper
      
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {info.map(element=>{
                  return(
                      
                    <SwiperSlide isActive><CardCarrusel  imagen={element.poster_path}/></SwiperSlide>
                      
                      
                  )
              })
              }
    </Swiper>
  );
};

export default Carrusel