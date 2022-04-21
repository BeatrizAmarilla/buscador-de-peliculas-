import { ImgW300 } from "../exportarArchivos/Export"
import { Link } from "react-router-dom"



const Card = ({nombre, imagen, detalle, votacion,id})=>{
    return(
        <Link to={`/movie/${id}`} >
            <div>
                <img alt="imagen" src={ImgW300+imagen} />
            </div>

            <div>
                <h1>{nombre}</h1>
                <p>{votacion}</p>
            
            </div>
        </Link>
    )
}
export default Card