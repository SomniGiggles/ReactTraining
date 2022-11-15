import React from 'react'
import { useParams } from "react-router-dom";
import films from "../assets/films.json";
import FilmInfo from './FilmInfo';

const FilmDetail = () => {

    const params = useParams();
    const id = parseInt(params.id);

    const film = films.films.find((film) => {
        return film.id === id;
    })

    return <FilmInfo 
        key={film.id}
        id={film.id}
        name={film.title}
        description={film.synopsis}
        filmTimes={film.showtimes}
        ageCert={film.agecert}
        imageLink={`/${film.nowShowingSrcset.small}`}
        />
}

export default FilmDetail;