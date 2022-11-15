import React from "react";
import classifications from '../assets/classification.json';
import './FilmInfo.css';

const FilmInfo = (props) => {

    const allTimes = (props.filmTimes).map(time => <ul key={time}>{time}</ul>)
    const getIcon = (age) => {
        let where = "/assets/classifications/";
        where = where + classifications.classifications.filter(cls => cls.id === age)[0].image;
        return <img className="classification" src={where} alt={age} />;
    };

    return (
        <div>
            <img src={props.imageLink} alt={props.imageLink}></img>
            <h3>{props.name}</h3><h4>{getIcon(props.ageCert)}</h4>
            <div className="film-description">{props.description}</div>
            <div className="film-container">{allTimes}</div>
            <button>Book now</button>
        </div>
    )
}

export default FilmInfo;