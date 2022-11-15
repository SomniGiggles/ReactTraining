import React from "react";

const Footer = () => {
    return (
        <div className="footer-background">
            <div className="film-container">
                <img src="/footer-logo.png" width="200px" alt="footer-logo"/>
                <div className="film-description">
                    <h3>MORE INFO</h3>
                    <button>About us</button>
                    <button>FAQ</button>
                    <button>Contact us</button>
                </div>
                <div className="film-description">
                    <h3>FIND US</h3>
                    <img src="/footer-map.png" width="100px" alt="map"/>
                    <p>Lorem ipsum dolar sit amet, consectetuer</p>
                </div>
                <div className="film-description">
                    <h3>FOLLOW US</h3>
                    <img src="/twitter.png" alt="twitter-icon"/>
                    <img src="/instagram.png" alt="instagram-icon"/>
                    <img src="/facebook.png" alt="facebook-icon"/>
                    <img src="/youtube.png" alt="youtube-icon"/>
                </div>
            </div>
            <p>Copyright &copy; The Classic Cinema Company Ltd 2020. All rights reserved.</p>
            <button>Back to top</button>
        </div>
    )
}

export default Footer;