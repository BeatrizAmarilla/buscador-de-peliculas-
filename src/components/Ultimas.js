import useFetchPelis from "../Hooks/useFetchPelis"
import Card from "./Card"

import "../style/CardsConteiner.scss"



const Ultimas = () =>{
    const {peliculas} = useFetchPelis("upcoming")

    return (
        <div className="backPage">
            <h2 style= {{color:"white",fontWeight:"bold",margin:"0",padding:"10px 10px 10px 10px"}}>ULTIMAS PELICULAS</h2>

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


