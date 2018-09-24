/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import PropTypes from 'prop-types';

const MovieDetail = ({ match }) => (
  <div>
    movie detail component with an id of
    {match.params.id}
  </div>
);

MovieDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default MovieDetail;
