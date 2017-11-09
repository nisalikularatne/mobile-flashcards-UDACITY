import React from 'react';
<script src="http://localhost:8097"></script>
import { StyleSheet, Text, View } from 'react-native';
import DeckList from "./components/DeckList";
import { createStore,applyMiddleware,compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducer)}>
            <View  style={{flex: 1}}>
               <DeckList/>
            </View>
        </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
