import useFetchPelis from "../Hooks/useFetchPelis"
import Card from "./Card"
import "../style/CardStilo.scss"




const Populares = () =>{
 const{peliculas, isLoanding} = useFetchPelis("popular")
  
    return (

        <div>
                <h2>peliculas popu</h2>
        
            <div className="cardsConteiner cards">
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
        </div>
    )
}

export default Populares


