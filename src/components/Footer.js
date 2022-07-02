import React from 'react'
import './Footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='social'>
                        <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                        <FaInstagram size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer