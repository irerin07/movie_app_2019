import React from "react";
import PropTypes from "prop-types";

//when the component does not need state, than the component,
//does not neccessarily have to be class component

function Movie({id, year, title, summary, poster, genre}){
    return (
    <div>
        <h3>ID: {id}</h3>
        <h3>Released Year: {year}</h3>
        <h4>Title: {title}</h4>
        <h4>Summary: {summary}</h4>
        <img src={poster} alt={title}></img>
        <h6>Genre: {genre}</h6>
    </div>
    )
    
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.array
}

export default Movie;