
import Chatlist from "./Chatlist";
function Sidebar(props){
     
    return(
        <>
        <h5 className="sidebar" align="left">{props.side}</h5>
      
        <Chatlist />
        
     </>  
    )
    
}
export default Sidebar;