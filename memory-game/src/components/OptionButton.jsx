const OptionButton = ({onClick,children, type = "button"})=>{
    return(
    <button onClick = {onClick} type={type} className ="option-button">
        {children}
    </button>)
}
export default OptionButton