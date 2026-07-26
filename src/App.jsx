import Navbar from './Components/Navbar/Navbar.jsx'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import Chatbot from './Components/Chatbot/Chatbot.jsx'
import './App.css'

function App() {

  return (
    <>
      <Chatbot />
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
