import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"

import CardDetalles from "./CardDetalles"

const PeliDetalles = () =>{
    const parametros = useParams()
    const [element,setElement] = useState([])
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${parametros.id}?api_key=36eef0f3ec35bf9f2c93121f86888240&language=es-ES`)
            .then(res => res.json())
            .then(data => {
                setElement(data)})

    }, [])
 




    return(
        <CardDetalles
                key={element.id}                
                nombre ={element.title} 
                imagen={element.poster_path}
                votacion={element.vote_average}
                id={element.id}
                
                />


    )



 }

 export default PeliDetalles;