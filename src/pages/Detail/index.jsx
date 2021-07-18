import React, {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";

import './styles.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import api from '../../services/api';

function Detail() {
  const { id } = useParams();
  const [detailBrewery, setDetailBrewery] = useState();
  const history = useHistory();


  useEffect(() => {
    api
      .get(`/${id}`)
      .then((response) => {
        setDetailBrewery(response.data);
      })
      .catch((error) => {
        alert("Ocorreu um erro ao buscar o local");
      });
  }, [id]);

  function handleBack() {
    history.goBack();
  }


  return (
    <> 
      <Header />
      <button onClick={() => handleBack()}>Back</button>
        {detailBrewery ? (
          <section>
            <h1>Detalhe do {detailBrewery.name}</h1>
            <p>Type: {detailBrewery.brewery_type}</p>
            <p>Street: {detailBrewery.street ? detailBrewery.street : 'NotFound'}</p>
            <p>City: {detailBrewery.city ? detailBrewery.city : 'NotFound'}</p>
            <p>State: {detailBrewery.state ? detailBrewery.state : 'NotFound'}</p>
            <p>Postal code: {detailBrewery.postal_code ? detailBrewery.postal_code : 'NotFound'}</p>
            <p>Country: {detailBrewery.country ? detailBrewery.country : 'NotFound'}</p>
            <p>Website: {detailBrewery.website_url ? <a href={detailBrewery.website_url} target="_blank" rel="noreferrer">{detailBrewery.website_url}</a> : 'NotFound'}</p>
            <p>Phone: {detailBrewery.phone ? detailBrewery.phone : 'NotFound'}</p>
            <p>Open in maps: {detailBrewery.latitude ? <a href={`https://www.google.com.br/maps/@${detailBrewery.longitude},${detailBrewery.latitude}`} target="_blank" rel="noreferrer">ir pra la</a> : 'NotFound'}</p>
          </section>
        ) : <h1>Loading...</h1>}
      <Footer />
    </>
  );
}

export default Detail;