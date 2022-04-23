import useFetchPelis from "../Hooks/useFetchPelis"
import Card from "./Card"

import "../style/CardsConteiner.scss"
import "../style/backPage.scss"




const Populares = () =>{
 const{peliculas, isLoanding} = useFetchPelis("popular")
  
    return (

        <div className="backPage">
            <h2 style= {{color:"white",fontWeight:"bold",margin:"0",padding:"10px 10px 10px 10px"}}>PELICULAS POPULARES</h2>
        
            <div className="cardsConteiner cards">
                {isLoanding && <p>ESTA CARGANDO</p>}

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

export default Populares



