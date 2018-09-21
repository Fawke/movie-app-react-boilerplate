import React from 'react';

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const searchTerm = event.target.value;
    this.setState(() => ({ searchTerm }));
  } 

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Seach movies" onChange={this.handleOnChange}/>
          <button type="button" onClick={this.props.handleSearchMovie.bind(null, this.state.searchTerm)}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchMovie;