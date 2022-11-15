import React from "react";

const FilmInfo = (props) => {

    const allTimes = (props.filmTimes).map(time => <ul key={time}>{time}</ul>)

    return (
        <div>
            <img alt="movie_poster"></img>
            <h3>{props.name}</h3><h4>{props.ageCert}</h4>
            <div className="film-description">{props.description}</div>
            <div className="film-container">{allTimes}</div>
            <button>Book now</button>
        </div>
    )
}

export default FilmInfo;