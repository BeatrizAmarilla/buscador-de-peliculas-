import useFetchPelis from "../Hooks/useFetchPelis"
import Card from "./Card"
import PeliDetalles from "./PeliDetalles"
const Ultimas = () =>{
    const {peliculas} = useFetchPelis("upcoming")

    return (
        <div>
        <h2>ultimas pelis</h2>

            <div className="cardsConteiner cards" >
                {peliculas.map(element => (
                <Card 
                key={element.id}                
                nombre ={element.title} 
                imagen={element.poster_path}
                votacion={element.vote_average}
                id={element.id}
                
                />
                
                ))}
            </div>
              
        </div>
    )
}

export default Ultimas



