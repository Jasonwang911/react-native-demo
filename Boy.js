import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Girl from './Gril';
import NavigationBar from './NavigationBar'

export default class Boy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
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
                title="Boy页面"
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
                <Text style={styles.text}>I am boy</Text>
                <Text style={styles.text}
                    onPress={ () => {
                        this.props.navigator.push({
                            component: Girl,
                            params: {
                                word: 'Boy 刷礼物了',
                                onCallBack: (word) => {
                                    this.setState({
                                        word: word
                                    })
                                }
                            }
                        })
                    }}
                >刷礼物</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua',
        // justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})