import React from "react";
import { Form } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import HomePage from "./HomePage";
import WhatsOn from "./WhatsOn";
import ComingSoon from "./ComingSoon";
import SignUp from "./SignUp";
import YourVisit from "./YourVisit";
import BookTickets from "./BookTickets";
import './Header.css';
import './Common.css';

const Header = () => {

    //Some sort of image file at the top

    return <>
        <Router>
            <nav style={{margin: 10}}>
                <img src="/assets/CCC-logo.png" className="bannerLogo" />
            <Link to='/' style={{padding: 5}}>Home</Link>
            <Link to='/whatson' style={{padding: 5}}>What's On</Link>
            <Link to='/comingsoon' style={{padding: 5}}>Coming Soon</Link>
            <Link to='/signup' style={{padding: 5}}>Sign Up</Link>
            <Link to='/yourvisit' style={{padding: 5}}>Your Visit</Link>
            <Link to='/booktickets' style={{padding: 5}}>Book Tickets</Link>
            <input type="text" placeholder="Search" />
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/whatson' element={<WhatsOn />}></Route>
                <Route path='/comingsoon' element={<ComingSoon />}></Route>
                <Route path='/signup' element={<SignUp />}></Route>
                <Route path='/yourvisit' element={<YourVisit />}></Route>
                <Route path='/booktickets' element={<BookTickets />}></Route>
            </Routes>
        </Router>

    </>;
};


export default Header;