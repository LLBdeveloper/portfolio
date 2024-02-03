// import './App.css'
import{ BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/header/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'


function App() {

  return (
    
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />          
          <Route path="/AboutMe" element={<AboutMe/>} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    
  )
}

export default App
