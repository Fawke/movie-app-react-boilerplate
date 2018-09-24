/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import MovieCollection from '../components/MovieCollection';
import MovieDetail from '../components/MovieDetail';
import AppBar from '../components/AppBar';
import NotFound from '../components/NotFound';
import TrendingMovies from '../components/TrendingMovies';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <AppBar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/collections" component={MovieCollection} />
        <Route path="/movies/:id" component={MovieDetail} />
        <Route path="/trending-movies" component={TrendingMovies} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
