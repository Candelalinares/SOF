import React from 'react'
import './Video.css'
import Goodpaper from './Goodpaper'

import { FaFacebook, FaInstagram, FaTwitter, FaDiscord, FaYoutube } from 'react-icons/fa'


import sofVideo from '../assets/secuencia01.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={sofVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1 >WELCOME TO <br></br>THE NEW WORLD</h1>
                {/*<p className='frase'>SOF is here, and has the power to break the chains that bind this world.<br></br> SOF possesses forbiden power in the term of 7 puzzles. He is ready to release <br></br> them into our world through the grandest the cybespace has ever witnessed.<br></br> So be ready to go beyond and try to be the one successor.</p>*/}
                    <div className='social'>
                        <a href='https://www.facebook.com/Seven-of-Few-107817825163173' target='_blank' rel="noreferrer"><FaFacebook size={25} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <a href='https://twitter.com/Sevenoffew' target='_blank' rel="noreferrer"><FaTwitter size={25} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <a href='https://www.instagram.com/sevenoffew_nft/' target='_blank' rel="noreferrer"><FaInstagram size={25} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <a href='https://discord.gg/9S2X29q7' target='_blank' rel="noreferrer"><FaDiscord size={25} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <a href='https://www.youtube.com/channel/UCY4gNdEEI-S7Q8hwxr51kjA' target='_blank' rel="noreferrer"><FaYoutube size={25} style={{ color: '#ffffff', marginRight: '1rem' }} /></a>
                        <div className='margen'>
                            <Goodpaper />

                        </div>
                    </div>  
                </div>
            </div>
    )
}

export default Video