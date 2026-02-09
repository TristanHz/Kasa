import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Header from './components/header/header.jsx'
import Footer from './components/footer.jsx'
import Error from './components/error.jsx'
import House from './pages/house.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes> 
      <Footer /> 
    </Router>
  </React.StrictMode>
)