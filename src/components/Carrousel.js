import { Row, Col } from "./AuxiliaresCarrousel";

import RBCarousel from "react-bootstrap-carousel";
import useFetchCarrusel from "../hook/useFetchCarrusel";
import { Link } from "react-router-dom";



const Carrusel =({img})=>{

   const iconArrowLeft = <span className="fa fa-angle-left"></span>;
    const iconArrowRight = <span className="fa fa-angle-right"></span>;

    const imagen = useFetchCarrusel ()

 return(
     <>
      <div className="container-fluid">
        <Row>
          <Col span={12}>
            <RBCarousel
              autoplay="autoplay"
              slideshowSpeed={ 2500 }
              leftIcon={iconArrowLeft}
              rightIcon={iconArrowRight}
              animation={true}
              pauseOnVisibility = {true}
            >
               {imagen.map (imagen => <div key={imagen.id} style={{ height: 100 }}>
                  <img 
                  src={`https://image.tmdb.org/t/p/original${imagen.backdrop_path}`}
                  alt={`Poster de ${imagen.title}`}/>
                  <div className="carousel-caption" style={{textShadow:"2px 2px 2px black"}}>              
                  <h3>{imagen.title}</h3>
                  <p>{imagen.overview}</p>
                  <Link to= "./idCarruselDetalles">
                    <button 
                  style={{backgroundColor:"DarkKhaki", color:"black", borderRadius:"7px", width:"160px", border:"Olive, solid, 3px"}}>
                        Ver más
                    </button>
                  </Link>
                  </div>
              </div>
                )}
              
              </RBCarousel>
              </Col>
          </Row>
      </div>
     </>
 )
}

export default Carrusel