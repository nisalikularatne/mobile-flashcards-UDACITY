import React from 'react';
<script src="http://localhost:8097"></script>
import { StyleSheet, Text, View } from 'react-native';
import DeckList from "./components/DeckList";
import NewQuestion from "./components/NewQuestion";
import Quiz from "./components/Quiz";
import NewDeck from "./components/NewDeck";
import IndividualDeckView from "./components/IndividualDeckView";
import { createStore,applyMiddleware,compose } from 'redux'
import {StackNavigator,TabNavigator} from 'react-navigation';
import { Provider } from 'react-redux'
import reducer from './reducers'
const Tabs = TabNavigator({
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'DeckList',
                headerTintColor: '#edf1fd',
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                headerTintColor: '#e4f7fd',
            },
        },
    }
);
const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {title: 'Home', headerTintColor: '#726bff',},

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
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: '#1456ff',
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
    backgroundColor: '#effff6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
