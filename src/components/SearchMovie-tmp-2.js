/* eslint react/jsx-filename-extension: 0 */
/* eslint no-underscore-dangle: 0 */

import React from 'react';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';

class SearchMovie extends React.Component {
  state = {
    searchTerm: '',
  }

  handleOnChange = (value) => {
    const searchTerm = value;
    this.setState(() => ({
      searchTerm,
    }));
  }

  _onClick = () => {
    const { handleSearchMovie } = this.props;
    const { searchTerm: movieName } = this.state;
    handleSearchMovie(movieName);
  }

  render() {
    return (
      <SearchBar
        onChange={this.handleOnChange}
        onRequestSearch={this._onClick}
        style={{
          margin: '0 auto',
          maxWidth: 800,
        }}
      />
    );
  }
}

SearchMovie.propTypes = {
  handleSearchMovie: PropTypes.func.isRequired,
};

export default SearchMovie;
