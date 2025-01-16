// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import Services from './components/Services'
import Nopage from "./components/Nopage";

function App() {
  

  return (
    // <>
    // <Navbar/>
    // <Home/>
    // <About/>
    // <Services/>
    // <Footer/>
    // </>
  <>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="aboutUs" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="*" element={<Nopage/>} />
      {/* <Route path="aboutUs" element={<About />} /> */}
    </Routes>
  <Footer/>
  </BrowserRouter>
  </>
  )
}

export default App
