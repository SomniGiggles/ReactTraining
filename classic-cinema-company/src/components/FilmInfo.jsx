import React from "react";
import './FilmInfo.css';
import CertificateIcon from "./CertificateIcon";

const FilmInfo = (props) => {

    const allTimes = (props.filmTimes).map(time => <ul key={time}>{time}</ul>)

    return (
        <div>
            <img src={props.imageLink} alt={props.imageLink}></img>
            <h3>{props.name}</h3>
            <CertificateIcon age={props.ageCert} />
            <div className="film-description">{props.description}</div>
            <div className="film-container">{allTimes}</div>
            <button>Book now</button>
        </div>
    )
}

export default FilmInfo;