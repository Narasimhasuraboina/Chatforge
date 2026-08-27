
 
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
 
 <Sidebar  side="this is a side bar"/>
  
  
  <Chatarea  Chat="this is the chat area"/>
  
 
<ChatItem Chatitem="Rahul 
Hey bro, what's up?" 
/>
  </div>
 <Footer foot="this is the footer section pal"/>
 
 </>
  )
}

export default App
