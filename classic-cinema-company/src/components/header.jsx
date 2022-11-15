import React from "react";
import { NavLink } from 'react-router-dom';


import './Header.css';
import './Common.css';

const Header = () => {

    //Some sort of image file at the top

    return <>
            <nav style={{margin: 10}}>
                <img src="/assets/CCC-logo.png" className="bannerLogo" alt='bannerLogo'/>
            <NavLink to='/' style={{padding: 5}}>Home</NavLink>
            <NavLink to='/schedule' style={{padding: 5}}>What's On</NavLink>
            <NavLink to='/comingsoon' style={{padding: 5}}>Coming Soon</NavLink>
            <NavLink to='/signup' style={{padding: 5}}>Sign Up</NavLink>
            <NavLink to='/yourvisit' style={{padding: 5}}>Your Visit</NavLink>
            <NavLink to='/booktickets' style={{padding: 5}}>Book Tickets</NavLink>
            <input type="text" placeholder="Search" />
            </nav>

    </>;
};


export default Header;