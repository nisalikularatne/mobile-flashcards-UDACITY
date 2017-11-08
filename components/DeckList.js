import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

     const state= [
        {
            id: 0,
            title: 'React and Redux Minutes',
            cards: [1, 2, 3, 4]
    },


];
class DeckList extends React.Component {
            renderItem = ({item}) => {
                    return (
                            <View >
                                    <Text >{item.title}</Text>
                                    <Text >{item.cards.length}</Text>
                                </View>
                        );
                };

            render() {
                    return (
                            <FlatList data={state} renderItem={this.renderItem} />
                        );
                }
    }


export default DeckList