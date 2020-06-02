import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <Link to="/beers">
        <img src="" alt="All Beers" />
        <h2>All Beers</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          voluptas blanditiis odio, consequatur totam ipsa hic illo
          necessitatibus suscipit temporibus.{' '}
        </p>
      </Link>
      <Link to="/random-beer">
        <img src="" alt="Random Beer" />
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          voluptas blanditiis odio, consequatur totam ipsa hic illo
          necessitatibus suscipit temporibus.{' '}
        </p>
      </Link>
      <Link to="/new-beer">
        <img src="" alt="New Beer" />
        <h2>New Beer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          voluptas blanditiis odio, consequatur totam ipsa hic illo
          necessitatibus suscipit temporibus.{' '}
        </p>
      </Link>
    </section>
  );
}
