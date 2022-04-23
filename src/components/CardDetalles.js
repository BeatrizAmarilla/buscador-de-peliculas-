import { ImgW300 } from "../exportarArchivos/Export"

import "../style/CardDetallesPeli.scss"


const CardDetalles = ({nombre, imagen,votacion,imagenDeFondo,genres})=>{
    return(
        <div className="conteinerCardDetalles" style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${imagenDeFondo})`}}     >
            
                <div className="contenedorImagen">
                    <img alt="imagen" src={ImgW300+imagen} />
                </div>

                <div className="conteinerTitulo">
                    <h2>{nombre}</h2>
                    <p>{votacion}</p>
                
                </div>
        </div>

    )
}
export default CardDetalles