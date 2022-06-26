/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import Route from './src/routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistStorage } from './src/redux';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistStorage}>
        <Route />
      </PersistGate>
    </Provider>
  );
};

export default App;
