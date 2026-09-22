function Chatarea(props){
    const chat=props.chat;
    return(
        <div>
        <h3 className="chatarea" align="center" padding="50">{chat}</h3>
  </div>
    )
}
export default Chatarea;