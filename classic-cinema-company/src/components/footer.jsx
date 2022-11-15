import React from "react";

const Footer = () => {
    return (
        <div className="footer-background">
            <div className="film-container">
                <img alt="footer-logo"/>
                <div className="film-description">
                    <h3>MORE INFO</h3>
                    <button>About us</button>
                    <button>FAQ</button>
                    <button>Contact us</button>
                </div>
                <div className="film-description">
                    <h3>FIND US</h3>
                    <img alt="map"/>
                    <p>Lorem ipsum dolar sit amet, consectetuer</p>
                </div>
                <div className="film-description">
                    <h3>FOLLOW US</h3>
                    <img alt="twitter-icon"/>
                    <img alt="instagram-icon"/>
                    <img alt="facebook-icon"/>
                    <img alt="youtube-icon"/>
                </div>
            </div>
            <p>Copyright C The Classic Cinema Company Ltd 2020. All rights reserved.</p>
            <button>Back to top</button>
        </div>
    )
}

export default Footer;