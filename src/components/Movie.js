import React from 'react';
import { Link } from 'react-router-dom';

const Movie = (props) => {
  return (
    <div>
      <p>Movie name: {props.movie.title}</p>
      <Link to={`movies/${props.movie.id}`}>Movie detail page</Link>
    </div>
  );
};

export default Movie;