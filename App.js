import React from 'react';
<script src="http://localhost:8097"></script>
import { StyleSheet, Text, View } from 'react-native';
import DeckList from "./components/DeckList";
import NewQuestion from "./components/NewQuestion";
import IndividualDeckView from "./components/IndividualDeckView";
import { createStore,applyMiddleware,compose } from 'redux'
import {StackNavigator} from 'react-navigation';
import { Provider } from 'react-redux'
import reducer from './reducers'
const MainNavigator = StackNavigator({
    Home: {
        screen: DeckList,
        navigationOptions:
            {title: 'Decks'},
        headerTintColor: '#479aee',
    },
    IndividualDeckView: {
        screen: IndividualDeckView,
        navigationOptions: {
            headerTintColor: '#000',
        },
    },
        NewQuestion: {
            screen: NewQuestion,
            navigationOptions: {
                title: 'Add Question to the deck',
                headerTintColor: '#000',
            },
    },

});
export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducer)}>
            <View  style={{flex: 1}}>
               <MainNavigator/>
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
