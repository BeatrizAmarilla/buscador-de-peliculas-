import useFetchPelis from "../Hooks/useFetchPelis"

const Populares = () =>{
 const{peliculas, isLoanding} = useFetchPelis("popular")
  
    return (
        <div>
        <h2>peliculas popu</h2>

        {isLoanding && <p>ESTA CARGANDO</p>}

        {peliculas.map(pelicula => (
        <h3 key={pelicula.id}>{pelicula.title}</h3>
        ))}
        </div>

        
    )
}


export default Populares