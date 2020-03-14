import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Table from '../components/Table';


const EuCountries = props => (
  <Layout>
    <h1>EU Countries</h1>
    <Table countries={props.euCountries}/>
  </Layout>
);


EuCountries.getInitialProps = async function() {
  const res = await fetch('https://restcountries.eu/rest/v2/regionalbloc/eu');
  const euCountries = await res.json();

  return {euCountries};
};


export default EuCountries;