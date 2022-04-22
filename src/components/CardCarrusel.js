import { ImgW300 } from "../exportarArchivos/Export"
const CardCarrusel = ({imagen})=>{
    return(
        <div >
            <img alt="imagen" src={ImgW300+imagen} />
        </div>

    )
}
export default CardCarrusel 