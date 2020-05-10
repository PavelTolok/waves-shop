import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/styles.css'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Routes from './routes';

// store
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
          <Routes/>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


