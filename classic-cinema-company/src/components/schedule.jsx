import React from "react";
import films from "../assets/films.json";
import FilmInfo from "./FilmInfo";

const Schedule = () => {
    
    const allFilms = (films.films).map(film => 
        <FilmInfo 
            key={film.id}
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