import React from "react";
import './FilmInfo.css';
import CertificateIcon from "./CertificateIcon";
import { NavLink } from 'react-router-dom';

const FilmInfo = (props) => {

    const allTimes = (props.filmTimes).map(time => <ul key={time}>{time}</ul>)

    return (
        <div>
            <img src={props.imageLink} alt={props.imageLink}></img>
            <h3><NavLink className='filmTitle' to={`/films/${props.id}`}>{props.name}</NavLink></h3>
            <CertificateIcon age={props.ageCert} />
            <div className="film-description">{props.description}</div>
            <div >{allTimes}</div>
            <NavLink className="button-42" to='/booktickets'>Book now</NavLink>
        </div>
    )
}

export default FilmInfo;