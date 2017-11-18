import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class Quiz extends React.Component {

    state = {
        shouldShowAnswer: false,
        IndexQuestion: 0,
        correctAnswers: 0,
    };

    ifCorrect = () => {
        const {IndexQuestion, correctAnswers} = this.state;
        this.setState({IndexQuestion: IndexQuestion + 1, correctAnswers: correctAnswers + 1, shouldShowAnswer: false});
    };
    ifInCorrect = () => {
        this.setState({IndexQuestion: this.state.IndexQuestion + 1});
    };
    showAnswer = () => {
        this.setState({shouldShowAnswer: !this.state.shouldShowAnswer});
    };

    startQuiz = () => {
        this.setState({IndexQuestion: 0, correctAnswers: 0, shouldShowAnswer: false});
    };


    render() {
        const {IndexQuestion, correctAnswers, shouldShowAnswer} = this.state;
        const {questions} = this.props.navigation.state.params;
        const RemainingQuestions = questions.length - IndexQuestion;
        const isQuestionValid = IndexQuestion < questions.length;

        return (
            <View style={{flex: 1}}>
                {isQuestionValid ? (
                    <View style={styles.container}>

                        <View >
                            <View>
                                <Text>{RemainingQuestions} / {questions.length}</Text>
                            </View>
                        </View>

                        <View>
                            <View>
                                {shouldShowAnswer ? (
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 50}}>{questions[IndexQuestion].answer}</Text>

                                        <TouchableOpacity onPress={this.showAnswer}>
                                            <Text style={{fontSize: 20, color: '#24cb1b'}}>Question</Text>
                                        </TouchableOpacity>

                                    </View>) : (
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontSize: 36}}>{questions[IndexQuestion].question}</Text>

                                        <TouchableOpacity onPress={this.showAnswer}>
                                            <Text style={{fontSize: 18, color: '#ff3907'}}>Answer</Text>
                                        </TouchableOpacity>

                                    </View>
                                )}
                            </View>
                        </View>

                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>

                                <TouchableOpacity onPress={this.ifCorrect}>
                                    <Text style={{
                                        backgroundColor: '#70dd2f',
                                        justifyContent: 'center',
                                        height: 40,
                                        textAlign: 'center',
                                        width: 200,
                                        borderRadius:10,
                                        fontSize:30,
                                    }}>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.ifInCorrect}>
                                    <Text style={{
                                        backgroundColor: '#dd3026',
                                        justifyContent: 'center',
                                        height: 40,
                                        textAlign: 'center',
                                        width: 200,
                                        borderRadius:10,
                                        fontSize:30,
                                    }}>Incorrect</Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>

                ) : (
                    <View style={styles.container}>
                        <Text>Score: {correctAnswers}</Text>

                        <View style={{alignItems: 'center', flex: 2}}>
                            <View style={styles.container}>

                                <TouchableOpacity onPress={this.startQuiz}>
                                    <Text style={{
                                        backgroundColor: '#70dd2f',
                                        justifyContent: 'center',
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200
                                    }}>Start Quiz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={ this.props.navigation.goBack()}>
                                    <Text style={{
                                        height: 30,
                                        textAlign: 'center',
                                        width: 200,
                                        marginTop: 20,
                                        backgroundColor: '#ff463f',
                                        justifyContent: 'center',

                                    }}>Go to Deck View</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
    }
});