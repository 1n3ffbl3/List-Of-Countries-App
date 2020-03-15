const Modal = ({ countryDetails })  => {
  return (
    <div>
      <h2>Additional Info</h2>
      <p>Country name : {countryDetails.name}</p>
      <p>Capital : {countryDetails.capital}</p>
      <p>Alpha2code : {countryDetails.alpha2Code}</p>
      <p>Region : {countryDetails.region} </p>
      <p>Population : {countryDetails.population} </p>
      <style jsx>{`
        div {
          overflow-y: scroll;
          padding: 70px 80px 50px;
          top: 40%;
          transform: translateY(-50%);
          left: 0;
          right: 0;
          margin: 0 auto;
          max-width: 500px;
          min-width: 300px;
          background-color: white;
          box-shadow: 0 20px 40px -5px rgba(#cebb9b, 0.3);
          position: fixed;
          max-height: calc(100vh - 20vh);
          display: flex;
          flex-direction: column;
        }
      `}
      </style>
    </div>
  );
};

export default Modal;