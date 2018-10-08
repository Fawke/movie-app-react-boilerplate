/* eslint react/jsx-filename-extension: 0 */
/* eslint react/forbid-prop-types: 0 */
/* eslint react/jsx-no-bind: 0 */

import React from 'react';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: '20px auto 0',
    width: '650px',
    height: '20px',
  },
  input: {
    width: '100%',
  },
});

class SearchMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    const searchTerm = event.target.value;
    this.setState(() => ({ searchTerm }));
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { handleSearchMovie } = this.props;
    const { searchTerm } = this.state;
    handleSearchMovie(searchTerm);
  }

  render() {
    const { classes, handleSearchMovie } = this.props;
    const { searchTerm } = this.state;
    return (
      <div>
        <Paper
          className={classes.root}
          elevation={3}
        >
          <Grid container spacing={24}>
            <Grid item xs={11}>
              <form
                onSubmit={this.handleOnSubmit}
              >
                <Input
                  placeholder="Search movie"
                  onChange={this.handleOnChange}
                  fullWidth
                  className={classes.input}
                  disableUnderline
                  autoFocus
                />
              </form>
            </Grid>
            <Grid item xs={1}>
              <SearchIcon
                className={classes.icon}
                onClick={handleSearchMovie.bind(null, searchTerm)}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

SearchMovie.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearchMovie: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchMovie);
