import React, { Component } from 'react';

import { listAllBeers } from './../services/beersApi';
import { Link } from 'react-router-dom';

class Beers extends Component {
  constructor() {
    super();
    this.state = {
      listOfBeers: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    listAllBeers()
      .then(arrayOfBeers => {
        console.log('arrayOfBeers ->', arrayOfBeers);
        this.setState({
          listOfBeers: arrayOfBeers
        });
      })
      .catch(err =>
        console.log('ERROR ON: loadData method on Beers class', err)
      );
  }

  render() {
    const allBeers = this.state.listOfBeers;
    return (
      <ul>
        {allBeers.map(beer => {
          return (
            <Link to={`/beers/${beer._id}`} className="link-beer-list">
              <li key={beer._id} className="beer-item-list">
                <img src={beer.image_url} alt={beer.name} />
                <div>
                  <h3>{beer.name}</h3>
                  <h5> {beer.tagline} </h5>
                  <p>
                    {' '}
                    <strong>Created by: </strong>
                    {beer.contributed_by}
                  </p>
                </div>
              </li>
              <hr />
            </Link>
          );
        })}
      </ul>
    );
  }
}

export default Beers;
