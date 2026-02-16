import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import About from './pages/about/about.jsx'
import Header from './layouts/header/header.jsx'
import Footer from './layouts/footer/footer.jsx'
import Error from './pages/error/error.jsx'
import House from './pages/house/house.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house/:id" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
        <Route path="/404" element={<Error />} />
      </Routes> 
      <Footer /> 
    </Router>
  </React.StrictMode>
)