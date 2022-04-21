import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"


const PeliDetalles = () =>{
    const parametros = useParams()
    const [element,setElement] = useState([])
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${parametros.id}?api_key=36eef0f3ec35bf9f2c93121f86888240&language=es-ES`)
            .then(res => res.json())
            .then(data => {
                setElement(data)})

    }, [])
    console.log(element)




    return(
        <h2>{element.title}</h2>


    )



 }

 export default PeliDetalles;