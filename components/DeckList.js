import React from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity  } from 'react-native';
import {getDecks} from '../actions/index'
import {fetchDecks} from '../utils/AsyncStorage'
import {connect} from 'react-redux';
import decks from '../reducers/index';
import SingleDeckDisplay from "../components/SingleDeckDisplay";
class DeckList extends React.Component {
    componentDidMount() {
                fetchDecks()
                    .then(decks => this.props.dispatch(getDecks(decks)))

            }
    returnDeckData=()=>{
        return Object.values(this.props.decks)
    }
    renderItem = ({item}) => (
                <View  >

                        <TouchableOpacity style={styles.box} onPress={() => this.props.navigation.navigate('IndividualDeckView',{entryId:item})}>
                            <SingleDeckDisplay //can pass title and questions to SingleDeckDisplay as props
                                title={item.title}
                                questions={item.questions}/>
                        </TouchableOpacity>

        </View>
    );


        render() {
            console.log(this.props)
            const getDeckData = this.returnDeckData()
                return (
                        <View >

                                <FlatList
                                    data={getDeckData}
                                    renderItem={this.renderItem}
                                    keyExtractor={(item, index) => index}/>
                </View>
                );
            }
}
function mapStateToProps(state) {
        return {
                decks: state,
            };
    }
const styles = StyleSheet.create({
    deck: {
        flexDirection: 'row',

    },

});

export default connect(mapStateToProps)(DeckList)