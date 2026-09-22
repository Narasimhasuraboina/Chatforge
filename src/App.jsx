
 
import './App.css'
import Chatarea from './components/ChatArea'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import ChatItem from './components/ChatItem'

function App() {
  
  return (
    <>
    
    
       <Header head="this is the header"/>
        
       <div className='main'> 
 
 <Sidebar />
  
  
  <Chatarea  chat="  this is the chat area"/>
  
  </div>
 <Footer foot="this is the footer section pal"/>
  
 </>
  )
}

export default App
