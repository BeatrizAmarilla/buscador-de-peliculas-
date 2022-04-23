import Carrusel from "./Carrusel"
import ListMovies from "./ListMovies";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";


const Main = () => {

    return (
        

        <div >
            
            <div >
                <Carrusel />
            </div>
           
            <div >
                
                <Paper elevation={3} className="paper" sx={{ maxHeight: 500, overflow: 'auto', margin: 10, borderRadius: 5 }}>
                    <h2>Popular Movies</h2>
                    <Link to="/movie/:id">
                    <ListMovies title="Popular Movies" url="popular" />
                    </Link>
                </Paper>
               
                <Paper elevation={3} className="paper" sx={{ maxHeight: 500, overflow: 'auto', margin: 10, borderRadius: 5 }}>
                    <h2>Top Rated</h2>
                    <Link to="/movie/:id">
                    <ListMovies title="Top Rated" url="top_rated" />
                    </Link>
                </Paper>

            </div>

        </div>

    )
}
export default Main