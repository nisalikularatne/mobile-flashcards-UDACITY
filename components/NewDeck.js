import React from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {addDeck} from '../actions/index';
import {createDeck} from '../utils/AsyncStorage';

class AddDeck extends React.Component {
    componentWillMount() {
        this.setState({
            NewDeck: ''
        })
    }

    NewDeckEntry = () => {
        const {decks} = this.props;
        const newDeckState = this.state;


        if (!newDeckState.NewDeck) {
            Alert.alert('MESSAGE','Cannot Leave the field empty');
        }
        else
        {
            if (decks[newDeckState.NewDeck]) {
                Alert.alert(
                    'ERROR',
                    'DECK EXISTS IN DATABASE'
                );
            } else {
                const newDeck = {[newDeckState.NewDeck]: {title: newDeckState.NewDeck, questions: []}};

                this.props.dispatch(addDeck(newDeck));// add the decks
                createDeck(newDeck);

                Alert.alert(
                    'Successful', 'The Deck has been successfully added',
                    [
                        {NewDeck: 'OK', onPress: () => this.props.navigation.navigate('IndividualDeckView', {
                            title: newDeckState.NewDeck,
                            questions : []
                        })},
                    ],
                );

                this.setState({NewDeck: ''});
            }
        }
    };

    render() {
        return (
            <View style={style.container}>
                <Text style={{fontSize: 40}}>What is the title of your new deck ?</Text>

                <TextInput
                    value={this.state.NewDeck}
                    style={style.TextInputField}
                    onChangeText={text => this.setState({NewDeck: text})}/>

                <TouchableOpacity
                    onPress={this.NewDeckEntry}
                    style={style.ButtonForSubmission}>
                    <Text style={style.TextForSubmission}>Submit</Text>

                </TouchableOpacity>

            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    TextInputField: {
        width: 340,
        height: 70,
        borderWidth: 1,
        borderRadius:20,
        backgroundColor: '#749dff',
        margin: 24,
    },
    TextForSubmission: {
        color: '#fff',
        fontSize: 22,
        textAlign: 'center',
    },
    ButtonForSubmission: {
        backgroundColor: '#343434',
        padding: 10,
        height: 44,
        borderRadius:20
    },

});

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps)(AddDeck);