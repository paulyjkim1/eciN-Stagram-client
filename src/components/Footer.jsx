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




export default function Footer() {


    return(


        <div>
            <div className='footer'>
                <div className='broughtby'>
                    <h1>Brought to you by:</h1>
                    <a className='footerLinks' href='https://www.linkedin.com/in/parkfamily/' target='_blank'>Daniel Park</a>
                    <a className='footerLinks' href='https://www.linkedin.com/in/derek-haleswdev/' target='_blank'>Derek Hale</a>
                    <a className='footerLinks' href='https://www.linkedin.com/in/paulyoungjinkim/' target='_blank'>Paul Kim</a>
                    <a className='footerLinks' href='https://www.linkedin.com/in/tbfrobinson/' target='_blank'>Theo Robinson</a>
                    <a className='footerLinks' href='' target='_blank'>Cookie Policy</a>
                </div>
            </div>
        </div>
    )
}