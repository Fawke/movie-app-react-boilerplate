import React from 'react';
import { NavLink } from 'react-router-dom'; 

const AppBar = () => {
  return (
    <div>
      <NavLink to="/trending-movies" activeClassName="is-active">Trending Movies</NavLink>
      <NavLink to="/collections" activeClassName="is-active">My Collections</NavLink>
    </div>
  );
}
  
export default AppBar;