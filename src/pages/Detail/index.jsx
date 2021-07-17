import React from 'react';
import { useHistory, useParams } from "react-router-dom";

import './styles.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Detail() {
  const { id } = useParams();
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }


  return (
    <> 
      <Header />
        <h1>Detalhe do {id}</h1>
        <button onClick={() => handleBack()}>Voltar</button>
      <Footer />
    </>
  );
}

export default Detail;