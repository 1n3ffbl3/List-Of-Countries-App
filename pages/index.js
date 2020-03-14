import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Table from '../components/Table';


const Index = props => (
  <Layout>
    <h1>All Countries</h1>
    <Table countries={props.allCountries}/>
  </Layout>
);


Index.getInitialProps = async function() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const allCountries = await res.json();
  
  return {allCountries};
};


export default Index;