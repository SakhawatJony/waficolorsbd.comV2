import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './share/Navbar/Navbar'
import Footer from './share/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
