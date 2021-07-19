import React from 'react';

import './styles.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

import { useBreweries } from "../../context/breweries";

function Home() {
  const { breweries, filterBreweries, setFilterBreweries, pagination, setPagination } = useBreweries();

  const handleFilter = (filterValue) => {
    setFilterBreweries(filterValue);
    setPagination(1);
  }

  const handlePagination = (paginationValue) => {
    setPagination(paginationValue);
  }

  return( 
  <div className="main__home">
    <Header />
    <div className="content_result">
      <div className="content_result--select">
        <p>Filter: </p>
        <select value={filterBreweries} onChange={(e) => handleFilter(e.target.value)}>
          <option value=""></option>
          <option value="micro">micro</option>
          <option value="nano">nano</option>
          <option value="regional">regional</option>
          <option value="brewpub">brewpub</option>
          <option value="large">large</option>
          <option value="planning">planning</option>
          <option value="bar">bar</option>
          <option value="contract">contract</option>
          <option value="proprietor">proprietor</option>
          <option value="closed">closed</option>
        </select>
      </div>
      <div className="content__result--grid">
      {
        breweries ? (
          breweries.map((brewery) => {
            return <Card key={breweries.id} brewery={brewery} />
          })
        ) : <h1>Loading...</h1>}
      </div>
    </div>
    <nav className="content__nav">
      <button type="button" onClick={() => handlePagination(1)} className={pagination === 1 ? 'content__nav--active' : ''}>1</button>
      <button type="button" onClick={() => handlePagination(2)} className={pagination === 2 ? 'content__nav--active' : ''}>2</button>
      <button type="button" onClick={() => handlePagination(3)} className={pagination === 3 ? 'content__nav--active' : ''}>3</button>
    </nav>
    <Footer />
  </div>
  );

}

export default Home;