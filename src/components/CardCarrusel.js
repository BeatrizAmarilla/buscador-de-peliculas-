import "../style/CardStilo.scss"
import { ImgW500 } from "../exportarArchivos/Export"

const CardCarrusel = ({imagen})=>{
    return(
        <div >
            <img alt="imagen" src={ImgW500+imagen} />
        </div>

    )
}
export default CardCarrusel 