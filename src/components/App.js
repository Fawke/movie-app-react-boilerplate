import React from 'react';

import SearchMovie from './SearchMovie.js';
import Movies from './Movies.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }

    this.handleSearchMovie = this.handleSearchMovie.bind(this);
  }

  handleSearchMovie(movieName) {
    console.log('called handleSearchMovie');
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=6f0685b36934a9968ee63d7188e9920c&language=en-US&query=${movieName}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(movies => this.setState(() => ({ movies })));
  }

  render() {
    return (
      <div>
        <SearchMovie 
          handleSearchMovie={this.handleSearchMovie}
        />
        <Movies 
          movies={this.state.movies.results}
        />
    </div>
    );
  }
}

export default App;