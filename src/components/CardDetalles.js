import { ImgW300 } from "../exportarArchivos/Export"
import { Link } from "react-router-dom"
import "../style/CardDetallesPeli.scss"


const CardDetalles = ({nombre, imagen,votacion,id})=>{
    return(
        <div className="conteinerCardDetalles">
            <Link to={`/movie/${id}`} >
                <div className="contenedorImagen">
                    <img alt="imagen" src={ImgW300+imagen} />
                </div>

                <div className="conteinerTitulo">
                    <h1>{nombre}</h1>
                    <p>{votacion}</p>
                
                </div>
            </Link>
        </div>

    )
}
export default CardDetalles