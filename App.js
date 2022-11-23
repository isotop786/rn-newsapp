import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux';
import store from './redux/store';
import Root from './Root';

const App = () => {
  return (
    <Provider store={store}>
      <Root/>
    </Provider>
  )
}

export default App