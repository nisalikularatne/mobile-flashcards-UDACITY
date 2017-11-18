import React from 'react';
import {View, StyleSheet, Text,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
class IndividualDeckView extends React.Component {


    render() {
        const { title } = this.props.navigation.state.params
        const questions =this.props.decks[title] &&  this.props.decks[title].questions;
       return(
           <View>
           <View style={styles.deck}>
               < View style={{justifyContent: 'center', alignItems: 'center'}}>
                   <Text  style={styles.NewDeck}>{title}</Text>
                   <Text  style={styles.NewDeck}>{questions.length} cards</Text>
               </View>
           </View>
               <View style={styles.addcard}>
                   <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}><Text style={styles.Titles} onPress={() => {
                       this.props.navigation.navigate('NewQuestion', {
                           title,
                           questions,
                       });
                   }}>Add Card</Text>
               </TouchableOpacity>

           </View>
               <TouchableOpacity
                   onPress={() => {
                       this.props.navigation.navigate('Quiz', {
                           title,
                           questions,
                       });
                   }}
                   style={styles.startQuiz}>
                   <Text style={styles.Titles}>Start Quiz</Text>
               </TouchableOpacity>
           </View>

       )
}
}
const styles = StyleSheet.create({
    deck: {
        flexDirection: 'row',
        marginTop: 100,
        height: 120,
        backgroundColor: '#d4fffd',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addcard: {
        backgroundColor: '#000',
        margin: 30,
        padding: 10,
        height: 60,
        borderRadius: 12,

    },
    text: {
        color:'#11000c',
        fontSize:24
    },
    startQuiz: {
        backgroundColor: '#000',
        margin: 30,
        padding: 10,
        height: 60,
        borderRadius: 12,
    },
    Titles: {
        textAlign: 'center',
        fontSize: 22,
        color: '#fff',

    }
});
function mapStateToProps(state) {
    return {
        decks: state,
    };
}
export default connect(mapStateToProps)(IndividualDeckView)