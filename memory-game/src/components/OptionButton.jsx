const OptionButton = ({onClick,children, type = "button", id="button"})=>{
    return(
    <button onClick = {onClick} type={type} className ="option-button" id ={id}>
        {children}
    </button>)
}
export default OptionButton