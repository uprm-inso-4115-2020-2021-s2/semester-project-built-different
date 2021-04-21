import React from 'react';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import StateContext from '../context';

function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState({});

  return (
    <StateContext.Provider value={(state, setState)}>
      <Component {...pageProps} />
    </StateContext.Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
