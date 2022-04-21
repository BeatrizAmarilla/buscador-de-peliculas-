import useFetchPelis from "../Hooks/useFetchPelis"
import Card from "./Card"
const Ultimas = () =>{
    const {peliculas,isLoanding} = useFetchPelis("upcoming")

    return (
        <div className="cardsConteiner cards">
        <h2>ultimas pelis</h2>
        {isLoanding && <p>ESTA CARGANDO</p>}

        {peliculas.map(element => (
        <Card key={element.id}
        nombre ={element.title} 
       imagen={element.poster_path}
       votacion={element.vote_average}
       id={element.id}
   />
        ))}
        </div>
    )
}


export default Ultimas