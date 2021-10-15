/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import { store, persistor } from './redux/store';

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.render(
// <Provider store={store}>
//   <PersistGate persistor={persistor}>
  <App />,
//   </PersistGate>
//   </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
