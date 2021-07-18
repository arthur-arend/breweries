import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../../services/api";

const BreweriesContext = createContext({});

export const BreweriesProvider = ({ children }) => {
    const [ breweries, setBreweries ] = useState();
    const [ filterBreweries, setFilterBreweries ] = useState();
    const [ pagination, setPagination ] = useState(1);

    useEffect(() => {
        if(filterBreweries){
            api.get(`?by_type=${filterBreweries}&page=${pagination}`).then((res) => {
              setBreweries(res.data)
            })
        } else {
            api.get(`?page=${pagination}`).then((res) => {
                setBreweries(res.data)
              })
        }
      }, [pagination, filterBreweries]);

    return (
        <BreweriesContext.Provider
        value={{
            breweries,
            setBreweries,
            filterBreweries,
            setFilterBreweries,
            pagination,
            setPagination
        }}>
            {children}
        </BreweriesContext.Provider>
    );
};

export const useBreweries = () => {
    const context = useContext(BreweriesContext);

    if (!context) throw new Error("useBreweries must be used within a BreweriesContext.");

    const {
        breweries,
        setBreweries,
        filterBreweries,
        setFilterBreweries,
        pagination,
        setPagination
    } = context;

    return {
        breweries,
        setBreweries,
        filterBreweries,
        setFilterBreweries,
        pagination,
        setPagination
    };

};

BreweriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };