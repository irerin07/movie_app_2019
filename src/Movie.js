import React from "react";
import PropTypes from "prop-types";

//when the component does not need state, than the component,
//does not neccessarily have to be class component

function Movie({id, year, title, summary, poster}){
    return <h4>{title}</h4>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    poster: PropTypes.string.isRequired
}

export default Movie;