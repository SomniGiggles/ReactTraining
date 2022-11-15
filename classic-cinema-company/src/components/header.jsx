import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
        <img src="/CCC-logo.png" className="bannerLogo" />
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/schedule'>Schedule</NavLink>
            </li>
            <li>
                <NavLink to='/signup'>Signup</NavLink>
            </li>
        </ul>
        </>
    )
}

export default Header;