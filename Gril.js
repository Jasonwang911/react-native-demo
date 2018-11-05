import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import NavigationBar from './NavigationBar'

export default class Girl extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderButtom(image) {
        return <TouchableOpacity
                    onPress={ () => {
                        this.props.navigator.pop();
                    }}
                >
                    <Image style={{widht: 22, height: 22, margin: 5}} source={image}></Image>
                </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar 
                    title="girl页面"
                    leftButton={
                        this.renderButtom(require('./res/images/sao.png'))
                    }
                    rightButton={
                        this.renderButtom(require('./res/images/home.png'))
                    }
                    statusBar={{
                        backgroundColor: '#ee6363'
                    }}
                ></NavigationBar>
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
        // justifyContent: 'center'
    },
    text: {
        fontSize: 22
    }
})