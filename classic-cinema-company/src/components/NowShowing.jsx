import React from 'react';
import filmsFile from "../assets/films.json";
import { NavLink } from 'react-router-dom';

const NowShowing = () => {

    const films = filmsFile.films.map((film) => {
        return (
        <div key={film.id}>
            <img src={`/${film.nowShowingSrcset.small}`} alt={film.nowShowingSrcset.small} />
            <h3><NavLink className='filmTitle' to={`/films/${film.id}`}>{film.title}</NavLink></h3>
        </div>
        );
    })

    return (
        <>
            <h2>NOW SHOWING</h2>
            <div className='film-container'>
                {films}
            </div>
        </>
    );
}

export default NowShowing;