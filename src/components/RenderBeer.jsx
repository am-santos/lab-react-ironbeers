import React from 'react';

export default function Beer(beer) {
  const renderBeer = beer.beer;
  return (
    <section>
      <img src={renderBeer.image_url} alt={renderBeer.name} />
      <h2>{renderBeer.name}</h2>
      <h4>{renderBeer.tagline}</h4>
      <h4>{renderBeer.first_brewed}</h4>
      <h4>{renderBeer.attenuation_level}</h4>
      <p> {renderBeer.description} </p>
      <p>
        {' '}
        <strong>{renderBeer.contributed_by}</strong>{' '}
      </p>
    </section>
  );
}
