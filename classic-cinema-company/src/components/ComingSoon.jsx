import React from 'react';
import filmsFile from "../assets/films.json";
import { NavLink } from 'react-router-dom';
import "./NowShowing.css";

import CertificateIcon from './CertificateIcon';


const ComingSoon = () => {
    const formatDate = (textDate) => {
        const date = new Date(Date.parse(textDate));
        return date.toLocaleDateString('en-GB');
    };
    const filmsNowShowing = filmsFile.films.filter(film => {
        if (!film.startingDate)
            return false;
        return Date.parse(film.startingDate) > new Date();
    });
    const films = filmsNowShowing.map((film) => {
        return (
        <div key={film.id} className="nowShowingMovie">
            <img src={`/${film.nowShowingSrcset.small}`} alt={film.nowShowingSrcset.small} />
            <h3><NavLink className='filmTitle' to={`/films/${film.id}`}>{film.title}</NavLink></h3>
            <CertificateIcon age={film.agecert} />
            <p>Film opens on {formatDate(film.startingDate)}</p>
            <NavLink className="button-42" to='/booktickets'>Pre-book now</NavLink>
        </div>
        );
    })

    return (
        <>
            <h2>COMING SOON</h2>
            <div className='film-container'>
                {films}
            </div>
        </>
    );
};

export default ComingSoon;