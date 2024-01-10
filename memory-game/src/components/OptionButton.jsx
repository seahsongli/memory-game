const OptionButton = ({onClick,children})=>{
    return(
    <button onClick = {onClick}>
        {children}
    </button>)
}
export default OptionButton