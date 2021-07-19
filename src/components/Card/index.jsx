import React from 'react';
import { useHistory } from "react-router-dom";

import './styles.scss';

function Card(brewery) {
  const { id, name, brewery_type, country, street, city, postal_code} = brewery.brewery;
  const history = useHistory();

  const handleClickCard = (e) => {
    if (true) {
      history.push(`/detail/${e}`);
    }
  };
  
  return (
    <article onClick={() => handleClickCard(id)} className="article__card">
      <h1>{name}</h1>
      <div className="article__card--p">
        <p>{street}</p>
        <p>{city} - {postal_code}</p>
        <p>{country}</p>
      </div>
      <div className="article__card--type">
        <span className={brewery_type}>{brewery_type}</span>
      </div>
    </article>
  );
}

export default Card;