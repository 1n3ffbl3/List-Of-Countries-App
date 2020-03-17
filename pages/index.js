import fetch from 'isomorphic-unfetch';
import { Fragment, useEffect, useState } from 'react';

import PaginatedTable from '../components/PaginatedTable';
import ToggleCacheBtn from '../components/ToggleCacheBtn';
import { LocalStorageKeys } from '../utils/enum';


const Index = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const isCacheEnabled = localStorage.getItem(LocalStorageKeys.IS_CACHE_ENABLED) === 'true';

    const fetchCountries = async (setCache) => {
      const res = await fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;alpha2Code;region;population');
      const fetchedCountries = await res.json();

      if (setCache) {
        localStorage.setItem(LocalStorageKeys.COUNTRIES, JSON.stringify(fetchedCountries));
      }

      setCountries(fetchedCountries);
    }

    if (isCacheEnabled) {
      const cachedCountries = localStorage.getItem(LocalStorageKeys.COUNTRIES);

      if (cachedCountries) {
        setCountries(JSON.parse(cachedCountries));
      } else {
        fetchCountries(true);
      }
    } else {
        fetchCountries(false);
    }
  }, []);

  return (
    <Fragment>
      <ToggleCacheBtn />
      <h2>All Countries</h2>
      <PaginatedTable data={countries}/>
    </Fragment>
  );
};


export default Index;