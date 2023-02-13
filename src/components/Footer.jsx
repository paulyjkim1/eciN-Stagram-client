import '../css/Footer.css'
import { useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import Modal from 'react-modal'

// Icon imports
import { TiThMenu as Hamburger } from 'react-icons/ti'
import { BiSearchAlt as Search } from 'react-icons/bi'
import { AiFillHome as Home } from 'react-icons/ai'
import { AiOutlinePlusSquare as Plus } from 'react-icons/ai'


let modalStyles = {
    content: {
        backgroundColor: 'rgba(0,0,0)',
        color: 'white',
        border: '1px solid rgb(11, 11, 11)',
        borderRadius: '10px',
        width: '80%',
        margin: 'auto',
        height: '80%',
    },
    overlay:{
        backgroundColor: 'rgba(255,255,255,.2)'
    }
}


export default function Footer() {
    let [loginIsOpen, setLoginIsOpen] = useState(false)
    let [signUpIsOpen, setSignUpIsOpen] = useState(false)

    function openLogin(e) {
        e.preventDefault()
        setLoginIsOpen(true)
    }

    function closeLogin(e) {
        e.preventDefault()
        setLoginIsOpen(false)
    }
    function openSignUp(e) {
        e.preventDefault()
        setSignUpIsOpen(true)
    }

    function closeSignUp(e) {
        e.preventDefault()
        setSignUpIsOpen(false)
    }

    let logout = async e => {
        e.preventDefault()
        try {
            let logout = await axios.get('http://localhost:8000/logout')
            return <Navigate to='/register' />
        } catch(err) {
            console.log(err)
        }
    }
    return(


        <div>
            <div className='footer'>
                <div className='login-sinup'>
                    <button onClick={logout}> Logout</button>
                    <div className='login-text'>Have an account?</div>
                    <div className='login' onClick={openLogin}>Make Post Modal</div>
                    <div className='login-text'>New to eciN-stagram?</div>
                    <div className='login' onClick={openSignUp}>Modal</div>
                </div>
            </div>
            <Modal
                isOpen={signUpIsOpen}
                onRequestClose={closeSignUp}
                style={modalStyles}
            >
                <div className='modal'>
                    <h1 className='modal-header'>Singhup</h1>
                    <form>
                        <input 
                            className='modal-input'
                            name='username'
                            placeholder='Username'
                        />
                        <input 
                            className='modal-input'
                            name='email'
                            placeholder='Email'
                        />
                        <input 
                            className='modal-input'
                            name='password'
                            placeholder='Password'
                        />
                    </form>
                    <button className='modal-close' onClick={() => closeLogin()}>X</button>
                </div>

            </Modal>
            <Modal
                isOpen={loginIsOpen}
                onRequestClose={closeLogin}
                style={modalStyles}
            >
                <div className='modal'>
                    <h1 className='modal-header'>Login</h1>
                    <form>
                        <input 
                            className='modal-input'
                            name='username'
                            placeholder='Username'
                        />
                        <input 
                            className='modal-input'
                            name='email'
                            placeholder='Email'
                        />
                        <input 
                            className='modal-input'
                            name='password'
                            placeholder='Password'
                        />
                    </form>
                    <button className='modal-close' onClick={() => closeSignUp()}>X</button>
                </div>

            </Modal>
            <div className='footer2'>
                <div className='icons'><div className='footer-icon'>📸</div></div>
                <div className='icons'><div className='footer-icon'>🏠</div></div>
                <div className='icons'><div className='footer-icon'>🔍</div></div>
                <div className='icons'><div className='footer-icon'>➕</div></div>
                <div className='icons'><div className='footer-icon'>🪞</div></div>
            </div>
        </div>
    )
}