import React, { Component } from 'react';

import { oneBeer } from './../services/beersApi';

import RenderBeer from '../components/RenderBeer';

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  loadData() {
    const beerId = this.props.match.params.beerId;
    console.log('BEERID ->', beerId);
    oneBeer(beerId)
      .then(beer => this.setState({ beer }))
      .catch(err =>
        console.log('ERROR ON: loadData method on Beer class', err)
      );
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    const beer = { ...this.state.beer };
    console.log('BEER ->', beer);
    return <RenderBeer beer={beer} />;
  }
}

export default Beer;
