const Button =({mensaje, color})=>{
    return(
        <button className={color}>
            {mensaje}
        </button>
    )
}
export default Button