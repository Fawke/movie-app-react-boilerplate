/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import SearchMovie from './SearchMovie';
import Movies from './Movies';

const API_KEY = '6f0685b36934a9968ee63d7188e9920c';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.handleSearchMovie = this.handleSearchMovie.bind(this);
  }

  handleSearchMovie(movieName) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(movies => this.setState(() => ({ movies })));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchMovie
          handleSearchMovie={this.handleSearchMovie}
        />
        <Movies
          movies={movies.results}
        />
      </div>
    );
  }
}

export default App;
