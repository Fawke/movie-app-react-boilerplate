import React from 'react';
import Movie from './Movie.js';

const Movies = (props) => {
  console.log('props.movies', props.movies);
  if (props.movies) {
    return props.movies.map((movie, index) => <Movie key={index} movie={movie} />);
  } else {
    return <div></div>
  }
}

export default Movies;