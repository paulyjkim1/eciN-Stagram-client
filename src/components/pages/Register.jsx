import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

import '../../css/Register.css'

export default function Register() {
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')


    
    
    let csrftoken = Cookies.get('csrftoken')
    if (csrftoken) {
        return <Navigate to='/' />
    }
    let handleSubmit = async e => {
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


    return(
        <div className='register'>
            <h1 className='registerTitle'>REGISTER</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Us er... name:</label>
                <input 
                    type='text' 
                    name='username' 
                    id='username' 
                    placeholder='BamesJond2'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='shaken@hotmale.com'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input 
                    type='password'
                    name='password'
                    id='password'
                    placeholder='h0n3YRyd3r!'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}