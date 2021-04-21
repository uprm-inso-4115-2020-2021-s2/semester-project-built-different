import { createStore, applyMiddleware } from 'redux';
import reduxThunkMiddlware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducers from '../store/reducers';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunkMiddlware)),
);

export default store;
