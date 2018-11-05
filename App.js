/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Text} from 'react-native';
import { Navigator} from 'react-native-deprecated-custom-components'
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
        selectedTab: 'home'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={
            {
              component: Boy
            }
          }
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component navigator={navigator} {...route.params} />
          }}
        ></Navigator>
          {/* <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="首页"
              selectedTitleStyle={{color: '#0D92f4'}}
              renderIcon={() => <Image source={require('./res/images/home.png')} />}
              renderSelectedIcon={() => <Image style={[{tintColor: '#0D92f4'}]} source={require('./res/images/home_s.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'home' })}>
              <View style={styles.page1}>
              </View>
          </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'news'}
                title="资讯"
                selectedTitleStyle={{color: '#0D92f4'}}
                renderIcon={() => <Image source={require('./res/images/news.png')} />}
                renderSelectedIcon={() => <Image style={[{tintColor: '#0D92f4'}]} source={require('./res/images/news_s.png')} />}
                onPress={() => this.setState({ selectedTab: 'news' })}>
                <View style={styles.page2}>
                </View>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'xiaoxi'}
                title="消息"
                selectedTitleStyle={{color: '#0D92f4'}}
                renderIcon={() => <Image source={require('./res/images/xiaoxi.png')} />}
                renderSelectedIcon={() => <Image style={[{tintColor: '#0D92f4'}]} source={require('./res/images/xiaoxi_s.png')} />}
                onPress={() => this.setState({ selectedTab: 'xiaoxi' })}>
                <View style={styles.page3}></View>
            </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'mine'}
              title="我的"
              selectedTitleStyle={{color: '#0D92f4'}}
              renderIcon={() => <Image source={require('./res/images/mine.png')} />}
              renderSelectedIcon={() => <Image style={[{tintColor: '#0D92f4'}]} source={require('./res/images/mine_s.png')} />}
              onPress={() => this.setState({ selectedTab: 'mine' })}>
              <View style={styles.page4}></View>
          </TabNavigator.Item>
        </TabNavigator> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
    flex: 1,
    backgroundColor: 'red',
  },
  page2: {
    flex: 1,
    backgroundColor: 'blue',
  },
  page3: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  page4: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
