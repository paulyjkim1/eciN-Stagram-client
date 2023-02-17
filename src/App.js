import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'
import Register from './components/pages/Register'

import './css/App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [prof, setProf] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      setCurrentUser(jwt_decode(token))
    }
    else {
      setCurrentUser(null)
    }
  }, [])

  let handleLogout = (e) => {
    e.preventDefault()
    console.log('loggin out')
    if (localStorage.getItem('jwt')) {
      localStorage.removeItem('jwt')
      setCurrentUser(null)
    }
  }

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Home handleLogout={handleLogout} currentUser={currentUser} prof={prof} setProf={setProf} />} />
          
          <Route path="/profile/:id" element={<Profile currentUser={currentUser} handleLogout={handleLogout} prof={prof} setProf={setProf} />} />

          <Route path="/register" element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
