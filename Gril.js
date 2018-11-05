import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Girl extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>I am gril</Text>
                <Text style={styles.text}>{this.props.word}</Text>
                <Text style={styles.text}
                    onPress = {() => {
                        this.props.onCallBack('一盒巧克力');
                        this.props.navigator.pop();
                    }}
                >送男孩巧克力</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center'
    },
    text: {
        fontSize: 22
    }
})