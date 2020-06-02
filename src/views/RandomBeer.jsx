import React, { Component } from 'react';

import { randomBeer } from './../services/beersApi';

import RenderBeer from '../components/RenderBeer';

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = {
      beer: {}
    };
  }

  loadData() {
    randomBeer()
      .then(beer => this.setState({ beer }))
      .catch(err =>
        console.log('ERROR ON: loadData method on Random Beer class', err)
      );
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const beer = { ...this.state.beer };
    return <RenderBeer beer={beer} />;
  }
}

export default RandomBeer;
