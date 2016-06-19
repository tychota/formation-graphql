import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

import AppLayout from './containers/AppLayout/AppLayout';
import BooksList from './pages/BooksList/BooksList';
import BookDetail from './pages/BookDetail/BookDetail';

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <Route path="/books" component={BooksList}/>
      <Route path="/book/:id" component={BookDetail}/>
    </Route>
  </Router>
);

export default App;
