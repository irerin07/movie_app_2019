import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//when the component does not need state, than the component,
//does not neccessarily have to be class component

function Movie({ id, year, title, summary, poster, genre }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h3 className="movie__id">{id}</h3>
        <h3 className="movie__title">{title}</h3>
        <h3 className="movie__year">{year}</h3>
        <ul className="genre">
          {genre.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  poster: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
