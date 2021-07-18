import React from 'react';

import './styles.scss';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

import { useBreweries } from "../../context/breweries";

function Home() {
  const { breweries, filterBreweries, setFilterBreweries, setPagination } = useBreweries();

  const handleFilter = (filterValue) => {
    setFilterBreweries(filterValue);
    setPagination(1);
  }

  const handlePagination = (paginationValue) => {
    setPagination(paginationValue);
  }

  return( 
  <>
    <Header />
    <div className="content_result">
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
      {
        breweries ? (
          breweries.map((brewery) => {
            return <Card key={breweries.id} brewery={brewery} />
          })
        ) : <div />
      }
    </div>
    <nav>
      <button type="button" value="1" onClick={(e) => handlePagination(e.target.value)}>1</button>
      <button type="button" value="2" onClick={(e) => handlePagination(e.target.value)}>2</button>
      <button type="button" value="3" onClick={(e) => handlePagination(e.target.value)}>3</button>
    </nav>
    <Footer />
  </>
  );

}

export default Home;