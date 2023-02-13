import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

import '../../css/Register.css'

export default function Register() {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    let [loginSignup, setLoginSignup] = useState(true)
    
    
    let csrftoken = Cookies.get('csrftoken')
    // if (csrftoken) {
    //     return <Navigate to='/' />
    // }
    let handleSignUp = async e => {
        e.preventDefault()
        try {
            let form = {
                email,
                username,
                password
            }
            let response = await axios.post('http://localhost:8000/users/register', form)
            console.log(response.data)
        }
        catch(err) {
            console.log(err)
        }
    }

    let handleLogIn = async(e) => {
        e.preventDefault()
        try {  
            let form = {
                email,
                password
            }
            let login = await axios.get('http://localhost:8000/login', form)
            console.log(login.data)
        } catch(err) {
            console.log(err)
        }
    }

    let loginSignupToggle = () => {
        setLoginSignup(!loginSignup)
    }

    let register = (
        <div className='register'>
            <h1 className='registerTitle'>REGISTER</h1>
            <form onSubmit={handleSignUp}>
                <label htmlFor='username'>Username:</label>
                <input 
                    type='text' 
                    name='username' 
                    id='username' 
                    placeholder='Username...'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='sample@email.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type='password'
                    name='password'
                    id='password'
                    placeholder='********!'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type='submit'>Register</button>
            </form>
            <button type='button' onClick={loginSignupToggle}>Already have an account? Log in</button>
        </div>
    )
    let logIn = (
        <div>
            <h1 className='loginTitle'>LOG IN</h1>
            <form onSubmit={handleLogIn}>
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type='submit'>Log in</button>
            </form>
            <button type='button' onClick={loginSignupToggle}>need signup?  Log in</button>
        </div>
    )

    return(
        <div>
            {loginSignup ? register : logIn}
        </div>
    )
}