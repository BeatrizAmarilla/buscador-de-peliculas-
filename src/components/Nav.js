import Button from'./Button'

const Nav =()=>{
    return (
        <div className='contenedor'>
           <div>
                <Button className="rojo" mensaje="mejores peliculas"/>
           </div>
           <div>
                <Button className="azul" mensaje="buscador"/>
           </div>     

            
        </div>
        
   
    )
}

export default Nav