function Sidebar(props){
    const side=props.side;
    return(
        <h5 className="sidebar" align="left">{side}</h5>
    )
}
export default Sidebar;