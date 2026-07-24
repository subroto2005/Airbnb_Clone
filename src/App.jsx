import Navbar from './Components/Navbar/Navbar.jsx'
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
