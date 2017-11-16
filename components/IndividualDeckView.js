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
                   <Text  style={styles.text}>{title}</Text>
                   <Text  style={styles.text}>{questions.length} cards</Text>
               </View>
           </View>
               <View style={styles.addcard}>
                   <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}}><Text style={styles.text} onPress={() => {
                       this.props.navigation.navigate('NewQuestion', {
                           title,
                           questions,
                       });
                   }}>Add Card</Text>
               </TouchableOpacity>
           </View>
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
        flexDirection: 'row',
        marginTop: 100,
        height: 120,
        backgroundColor: '#00fdff',
        justifyContent: 'center',
        alignItems: 'center'

    },
    text: {
        color:'#11000c',
        fontSize:24
    }
});
function mapStateToProps(state) {
    return {
        decks: state,
    };
}
export default connect(mapStateToProps)(IndividualDeckView)