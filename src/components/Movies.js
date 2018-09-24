/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import Movie from './Movie';

const Movies = ({ movies }) => {
  if (movies) {
    return movies.map(movie => <Movie key={movie.id} movie={movie} />);
  }
  return null;
};

export default Movies;
