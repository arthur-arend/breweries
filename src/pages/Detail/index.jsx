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
    <div className="main__detail"> 
      <Header />
        {detailBrewery ? (
          <div className="content__detail">
            <button onClick={() => handleBack()}> Back</button>
            <section className="section__detail">
              <div className="section__detail--content">
                <h1>{detailBrewery.name}</h1>
                <p>Type: {detailBrewery.brewery_type}</p>
                <p>Street: {detailBrewery.street ? detailBrewery.street : 'Missing Info'}</p>
                <p>City: {detailBrewery.city ? detailBrewery.city : 'Missing Info'}</p>
                <p>State: {detailBrewery.state ? detailBrewery.state : 'Missing Info'}</p>
                <p>Postal code: {detailBrewery.postal_code ? detailBrewery.postal_code : 'Missing Info'}</p>
                <p>Country: {detailBrewery.country ? detailBrewery.country : 'Missing Info'}</p>
                <p>Website: {detailBrewery.website_url ? <a href={detailBrewery.website_url} target="_blank" rel="noreferrer">{detailBrewery.website_url}</a> : 'Missing Info'}</p>
                <p>Phone: {detailBrewery.phone ? detailBrewery.phone : 'Missing Info'}</p>
                <p>Open in maps: {detailBrewery.latitude ? <a href={`https://www.google.com.br/maps/@${detailBrewery.longitude},${detailBrewery.latitude}`} target="_blank" rel="noreferrer">{detailBrewery.longitude},{detailBrewery.latitude}</a> : 'Missing Info'}</p>
              </div>
            </section>
          </div>
        ) : <h1>Loading...</h1>}
      <Footer />
    </div>
  );
}

export default Detail;