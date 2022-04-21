import useFetchPelis from "../Hooks/useFetchPelis"
import Card from "./Card"
import "../style/CardStilo.scss"

const Populares = () =>{
 const{peliculas, isLoanding} = useFetchPelis("popular")
  
    return (
        <div className="cardsConteiner cards">
        <h2>peliculas popu</h2>

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


export default Populares