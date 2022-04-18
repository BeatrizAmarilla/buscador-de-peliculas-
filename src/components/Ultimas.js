import useFetchPelis from "../hook/useFetchPelis"

const Ultimas = () =>{
    const {peliculas,isLoanding} = useFetchPelis("upcoming")

    return (
        <div>
        <h2>ultimas pelis</h2>
        {isLoanding && <p>ESTA CARGANDO</p>}

        {peliculas.map(pelicula => (
        <h3 key={pelicula.id}>{pelicula.title}</h3>
        ))}
        </div>
    )
}


export default Ultimas