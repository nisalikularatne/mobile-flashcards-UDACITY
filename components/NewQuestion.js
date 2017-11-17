import {Alert, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {addQuestion} from '../actions/index';
import {connect} from 'react-redux';
import {addQuestionForDeck} from '../utils/AsyncStorage'
class NewQuestion extends React.Component {

            componentWillMount() {
                    this.setState({
                            question: '',
                            answer: ''
                    })
                }

            submitQuestion = () => {
                const {title, questions} = this.props.navigation.state.params;
                const {question, answer} = this.state;
                const params = {title, questions, question, answer};

                        if (question === '') {
                            Alert.alert('The question cannot be left blank');
                            return;
                        }
                       if (answer === '') {
                            Alert.alert('The answer cannot be left blank');
                            return;
                        }



                        this.props.dispatch(addQuestion(params));

                        addQuestionForDeck({
                                card: {question: question, answer: answer},
                        deckName: title,
                        });

                Alert.alert('Success', 'Question Added Successfully',
                    [
                        {
                            NewDeck: 'OK', onPress: () =>
                            this.props.navigation.goBack()
                        }
                    ],);
            };


    render() {
                    const {question, answer} = this.state;

                        return (
                            <View style={style.container}>
                                    <Text  style={style.TextToSubmit}>Type in the question below</Text>
                                    <TextInput
                                        defaultValue="Question"
                                        value={question}
                                        style={style.TextInputField}
                                        onChangeText={question => this.setState({question})}/>
                        <Text  style={style.TextToSubmit}>Type in the answer below</Text>
                        <TextInput
                     defaultValue="Answer"
                            value={answer}
                            style={style.TextInputField}
                            onChangeText={answer => this.setState({answer})}/>

                        <TouchableOpacity
                     onPress={this.submitQuestion}
                            style={style.ButtonToSubmit}>
                            <Text style={style.TextToSubmit}>Submit</Text>
                        </TouchableOpacity>

                    </View>
                    );
                }
    }

const style = StyleSheet.create({
        container: {
    flex: 1,
                alignItems: 'center',
                paddingTop: 20,
            },
    TextInputField: {
            width: 350,
                height: 70,
                padding: 12,
                borderWidth: 1,
                borderColor: '#155b7f',
                margin: 30
        },

    TextToSubmit: {
            color: '#ff1b2f',
                fontSize: 20,
                textAlign: 'center',
                paddingBottom:20,
            },
    ButtonToSubmit: {
        backgroundColor: '#666666',
        padding: 30,
        height: 60,
    },
});
function mapStateToProps(state) {
            return {
                    decks: state,
                };
        }

export default connect(mapStateToProps)(NewQuestion);