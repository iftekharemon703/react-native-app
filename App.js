import React from 'react';
import { Provider } from 'react-redux';
import MainComponents from './src/MainComponents';
import store from './src/redux/store';

export default function App() {
  return(
    <Provider store={store}>
      <MainComponents />
    </Provider>
  )
}

