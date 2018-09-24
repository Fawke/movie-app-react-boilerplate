/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import PropTypes from 'prop-types';

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const searchTerm = event.target.value;
    this.setState(() => ({ searchTerm }));
  }

  render() {
    const { handleSearchMovie } = this.props;
    const { searchTerm } = this.state;
    return (
      <div>
        <form>
          <input type="text" placeholder="Seach movies" onChange={this.handleOnChange} />
          <button type="button" onClick={handleSearchMovie.bind(null, searchTerm)}>Search</button>
        </form>
      </div>
    );
  }
}

SearchMovie.propTypes = {
  handleSearchMovie: PropTypes.func.isRequired,
};

export default SearchMovie;
