import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

// Import Views
import Home from './views/Home';
import Beers from './views/Beers';
import Beer from './views/Beer';
import RandomBeer from './views/RandomBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          {/* Add condition to when not in home view */}
          <Link to="/">Home</Link>
        </nav>

        <Switch>
          <Route exact path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/beers/:beerId" component={Beer} />
          {/* <Route path="/new-beer" component={/* ???  /> */}
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
