import React from "react";
import films from "../assets/films.json";
import FilmInfo from "./FilmInfo";

const Schedule = () => {

    const filmsNowShowing = films.films.filter(film => {
        if (!film.startingDate)
            return true;
        return Date.parse(film.startingDate) <= new Date();
    });
    
    const allFilms = (filmsNowShowing).map(film => 
        <FilmInfo 
            key={film.id}
            id={film.id}
            name={film.title}
            description={film.synopsis}
            filmTimes={film.showtimes}
            ageCert={film.agecert}
            imageLink={film.nowShowingSrcset.small}
        />)

    return (
        <div>
            <h1>WHAT'S ON</h1>
            <div className="film-container">
                {allFilms}
            </div>
        </div>
    )
}

export default Schedule;
