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
      let fileHTML = "http://192.168.100.21:8102/jxtrq//OA_LNG_SND_GWNG/2018/2018-12-12/MTgxMjEyODI5NTIwNjQy/MTgxMjEyODI5NTIwNjQy.html";
      let file = "http://192.168.100.21:8102/file/3QIsoqd292boebgSMNqvSle.docx";
      let file2 = "http://192.168.100.21:8102/file/2laJBpBkR7Z8FyDZIglWzd.xlsx";
      let file3 = "http://192.168.100.21:8102/file/1n6ZqBERNatqfcDj8NsjCNc.pdf";
      let file4 = "http://192.168.100.21:8102/file/2emdjqTvp82FiLX9YIuxMk.docx";
      let file5 = "http://gs.moli.ds.lunbocl.ott.cibntv.net/hls/vCIBNHSYX/1800/vCIBNHSYX.m3u8?md5=c246ac4e6b6cb88b7f970b530ff04b86";
    return (
        <ScrollView>
      <View style={styles.container}>

          <View style={{alignItems:'center',marginBottom:20}}>
              <Text style={{fontSize:30,color:'#333333',}}
                    onPress={()=>this.call_button(file)}   //add
              >
                  文件 word 测试
              </Text>
          </View>
          <View style={{alignItems:'center',marginBottom:20}}>
              <Text style={{fontSize:30,color:'#333333',}}
                    onPress={()=>this.call_button(file2)}   //add
              >
                  文件2 excel 测试
              </Text>
          </View>
          <View style={{alignItems:'center',marginBottom:20}}>
              <Text style={{fontSize:30,color:'#333333',}}
                    onPress={()=>this.call_button(file3)}   //add
              >
                  文件3 pdf 测试
              </Text>
          </View>
          <View style={{alignItems:'center',marginBottom:20}}>
              <Text style={{fontSize:30,color:'#333333',}}
                    onPress={()=>this.call_button(file4)}   //add
              >
                  文件4 word 测试
              </Text>
          </View>

          <View style={{alignItems:'center',marginBottom:20}}>
              <Text style={{fontSize:30,color:'#333333',}}
                    onPress={()=>this.call_button(fileHTML)}   //add
              >
                  测试永忠转化后的文件
              </Text>
          </View>

          <View style={{alignItems:'center',marginBottom:20}}>
              <Text style={{fontSize:30,color:'#333333',}}
                    onPress={()=>this.call_button(file5)}   //add
              >
                  测试视频
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
        </ScrollView>
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
