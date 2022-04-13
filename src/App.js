import'./style/Card.css'
import Card from './components/Card.js'
import Nav from './components/Nav.js'

const App = ()=>{
 const gatos= [{
   nombre:'tomas',
   precio:15000,
   descripcion:"tomas esta feliz de ser vendido"
   
 },
 {
  nombre:'pepe',
  precio:15000,
  descripcion:"pepe tambien esta feliz de ser vendido"
 
},
{
  nombre:'pepito',
  precio:1500,
  descripcion:"pepito no esta tan feliz de ser vendido"
  
}]
   
return(
  

  
   <div className="divContenedor">
    {gatos.map(elemento=>(
      <div className="container">
        <Card
          nombre={elemento.nombre}
          precio={elemento.precio}
          descripcion={elemento.descripcion}
        />
      </div>
    ))}
   </div>
  )
}
export default App




