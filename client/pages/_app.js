import React from 'react';
import '../styles/globals.css';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, useDispatch } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../services/redux';
import { authActions } from '../store/actions';

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();

  const init = React.useCallback(async () => {
    await dispatch(authActions.verifyAuth());
  }, [dispatch]);

  React.useEffect(() => {
    init();
  }, [init]);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};
const makestore = () => store;

const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
