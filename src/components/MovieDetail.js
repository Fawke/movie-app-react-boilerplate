import React from 'react';

const MovieDetail = (props) => {
  console.log('props', props);
  return <div>movie detail component with an id of {props.match.params.id}</div>
};

export default MovieDetail;