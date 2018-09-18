import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import Button from '@material-ui/core/Button'

const Home = () => (
  <div>
    <p>React basic boilerplate with Material-UI configured</p>
    <Button variant="contained" color="primary"> 
      Home
    </Button> 
  </div>
);

ReactDOM.render(
  <Home />, 
  document.getElementById('app')
);