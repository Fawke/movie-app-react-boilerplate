/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = ({ movie }) => (
  <div>
    <p>
      Movie name:
      {movie.title}
    </p>
    <Link to={`movies/${movie.id}`}>Movie detail page</Link>
  </div>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Movie;
