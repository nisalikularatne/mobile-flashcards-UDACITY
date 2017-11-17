import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class SingleDeckDisplay extends React.Component {
    render() {

        return (
            <View style={styles.deck}>
                < View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text  style={styles.NewDeck}>{this.props.title}</Text>
                <Text  style={styles.NewDeck}>{this.props.questions.length} cards</Text>
            </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    deck: {
        flexDirection: 'row',
        marginTop: 12,
        height: 120,
        backgroundColor: '#fbfffa',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color:'#fdfbf5',
        fontSize:24
    }
});
export default SingleDeckDisplay