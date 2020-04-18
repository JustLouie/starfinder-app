import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import Home from './src/pages'
import MainReducer from './src/reducers'

export const store = createStore(MainReducer, composeWithDevTools(
  applyMiddleware(
    thunk
  )
))

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    padding: 20
  }
})


const App = (props) => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    </Provider>
  )
}

export default App
