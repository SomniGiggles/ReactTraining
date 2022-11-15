import React from "react";
import PropTypes from 'prop-types';

const MovieNowShowing = (movie) => {
    return <>
        <img className="movieNowShowingImage" src={movie.nowShowingSrcset.last()} alt={movie.title} />
        <label className="movieNowShowingLabel">{movie.title}</label>
    </>;
};

MovieNowShowing.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    shortname: PropTypes.string,
    synopsis: PropTypes.string,
    showtimes: PropTypes.arrayOf(PropTypes.string.isRequired),
    ageCert: PropTypes.string,
    nowShowingSrcset: PropTypes.arrayOf(PropTypes.string),
    whatsOnSrcset: PropTypes.arrayOf(PropTypes.string)
};

export default MovieNowShowing;