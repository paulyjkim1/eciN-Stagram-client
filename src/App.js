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

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    if (token) {
      setCurrentUser(jwt_decode(token))
    }
    else {
      setCurrentUser(null)
    }
  })

  let handleLogout = () => {
    localStorage.removeItem('jwt')
    setCurrentUser(null)
  }

  return (
    <div className='app'>
      <Router>
      <Header handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/profile/:id" element={<Profile />} />

          <Route path="/register" element={<Register setCurrentUser={setCurrentUser} />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  )
}

export default App;
