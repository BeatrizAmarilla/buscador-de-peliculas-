import { useState } from "react"

const Card = ( {nombre, precio,descripcion,imagen})=>{
    const[mostrarDescripcion,setMostrarDescripcion]=useState(false)
    const handleMostrarEnter =()=>{
        setMostrarDescripcion(true)
      }
      const handleMouseLeave=()=>{
        setMostrarDescripcion(false)
      }
    return(
        <article className="card" onMouseEnter={handleMostrarEnter} onMouseLeave={handleMouseLeave}>
            {imagen}
            <h2>{nombre}</h2>
            <p>{precio}</p>
           {mostrarDescripcion && <p>{descripcion}</p>}
           
        </article>
    )
}

export default Card