import axios from 'axios';

const listAllBeers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers') // API Link to GET the list of all beers
      .then(arrayOfBeers => resolve(arrayOfBeers.data))
      .catch(err => reject(err));
  });
};

const oneBeer = beerId => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`) // API Link to GET the list of all beers
      .then(beer => resolve(beer.data))
      .catch(err => reject(err));
  });
};

const randomBeer = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random') // API Link to GET the list of all beers
      .then(beer => resolve(beer.data))
      .catch(err => reject(err));
  });
};

export { listAllBeers, randomBeer, oneBeer };
