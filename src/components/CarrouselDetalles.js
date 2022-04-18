import { useParams } from "react-router-dom";

import useFetchCarrusel from "../hook/useFetchCarrusel";


const CarruselDetalles =()=>{

    const params = useParams ()
    const detallesCarrusel = useFetchCarrusel(params)
    

    return (
        <>

            <div>
                <article key={detallesCarrusel.id}>
                    <h3>{detallesCarrusel.title}</h3>
                    <h4>Sinopsis</h4>
                    <p>{detallesCarrusel.overview}</p>
                    <h4>Genero</h4>
                    <p>{detallesCarrusel.genre}</p>
                </article>                
                
            </div>
        </>
    )
}
