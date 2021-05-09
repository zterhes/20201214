import React from 'react';
import Menu from './Menu';
import Home from './pages/home';
import Login from './pages/login';
import Products from './pages/products';
import About from './pages/about';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App () {
  return (
    <Router>
      <div>
        <header>
          <Menu />
        </header>
        <main>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/products'>
              <Products />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
