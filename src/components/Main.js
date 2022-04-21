import useFetchPelis from "../Hooks/useFetchPelis"
import Card from "./Card"

const Main = () =>{
    
 const {peliculas,isLoanding} = useFetchPelis("popular")
  
    
    return (
        <div>
            <h2>peliculas popu</h2>
            {isLoanding && <p>ESTA CARGANDO</p>}
            <div>
                {peliculas.map(element => (
                <div>
                    <Card 
                        key={element.id}
                        nombre ={element.title} 
                    imagen={element.poster_path}
                    votacion={element.vote_average}
                    id={element.id}
                    />
                </div>
                ))}
            </div>
        </div>





    )
}

export default Main