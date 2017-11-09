import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class SingleDeckDisplay extends React.Component {
    render() {

        return (
            <View >
                <Text>{this.props.title}</Text>
                <Text>{this.props.questions.length} cards</Text>
            </View>

        )
    }
}
export default SingleDeckDisplay