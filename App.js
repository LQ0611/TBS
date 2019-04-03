/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    NativeModules,
    Alert,
    ScrollView,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    call_button(filePath){
        NativeModules.RNActivity.show(filePath);
    }

  render() {
      let file3 = "http://grad.cnu.edu.cn/docs/2019-04/20190403003048351438.pdf";
      return (

      <View style={styles.container}>


          <View style={{alignItems:'center',marginBottom:20}}>
              <Text style={{fontSize:30,color:'#333333',}}
                    onPress={()=>this.call_button(file3)}   //add
              >
                  文件3 pdf 测试
              </Text>
          </View>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
