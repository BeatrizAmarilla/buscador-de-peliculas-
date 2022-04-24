import { ImgW300 } from "../exportarArchivos/Export"
import { Link } from "react-router-dom"

const Card = ({nombre, imagen, detalle, votacion,id})=>{
    return(
        <Link to={`/movie/${id}`} style= {{textDecoration:"none",color:"white",marginLeft:
        "20px",fontWeight:"bold"}}>
            <div>
                <img style={{borderRadius: "10px"}} alt="imagen" src={ImgW300+imagen} />
            </div>

            <div>
                <h2>{nombre}</h2>
                <p>{votacion}</p>
            </div>
        </Link>
    )
}
export default Card