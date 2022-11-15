import React from "react";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-background">
            <div className="film-container">
                <img src="/footer-logo.png" width="200px" alt="footer-logo"/>
                <div className="film-description">
                    <h3>MORE INFO</h3>
                    <div className='navbar'>
                        <nav style={{margin: 10}}>
                            <NavLink to='/' style={{padding: 5}}>About us</NavLink>
                            <NavLink to='/' style={{padding: 5}}>FAQ</NavLink>
                            <NavLink to='/' style={{padding: 5}}>Contact us</NavLink>
                        </nav>
                    </div>
                </div>
                <div className="film-description">
                    <h3>FIND US</h3>
                    <img src="/footer-map.png" width="100px" alt="map"/>
                    <h5>Opening hours</h5>
                    <p>Mon - Fri: 8am - 8pm</p>
                    <p>Sat - Sun: 8am - 11pm</p>
                </div>
                <div className="film-description">
                    <h3>FOLLOW US</h3>
                    <img src="/twitter.png" className="footer-icon-images" alt="twitter-icon"/>
                    <img src="/instagram.png" className="footer-icon-images" alt="instagram-icon"/>
                    <img src="/facebook.png" className="footer-icon-images" alt="facebook-icon"/>
                    <img src="/youtube.png" className="footer-icon-images" alt="youtube-icon"/>
                </div>
            </div>
            <p>Copyright &copy; The Classic Cinema Company Ltd 2020. All rights reserved.</p>
            <button>Back to top</button>
        </div>
    )
}

export default Footer;
