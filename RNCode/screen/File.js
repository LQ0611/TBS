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

type Props = {};
export default class File extends Component<Props> {

    call_button(filePath){
        NativeModules.RNActivity.show(filePath);
    }

    showVideo(url){
        NativeModules.RNActivity.showVideo(url);
    }

    render() {
        let file3 = "http://grad.cnu.edu.cn/docs/2019-04/20190403003048351438.pdf";
        let file1 = "http://grad.cnu.edu.cn/docs/2019-04/20190404002233942595.pdf";
        let fileHTML = "http://192.168.100.21:8102/jxtrq//OA_LNG_SND_GWNG/2018/2018-12-12/MTgxMjEyODI5NTIwNjQy/MTgxMjEyODI5NTIwNjQy.html";
        let file = "http://192.168.100.21:8102/file/3QIsoqd292boebgSMNqvSle.docx";
        let file2 = "http://192.168.100.21:8102/file/2laJBpBkR7Z8FyDZIglWzd.xlsx";
        let file6 = "http://192.168.100.21:8102/file/1n6ZqBERNatqfcDj8NsjCNc.pdf";
        let file4 = "http://192.168.100.21:8102/file/2emdjqTvp82FiLX9YIuxMk.docx";
        let file5 = "http://gs.moli.ds.lunbocl.ott.cibntv.net/hls/vCIBNHSYX/1800/vCIBNHSYX.m3u8?md5=c246ac4e6b6cb88b7f970b530ff04b86";

        let url = "https://aldirect.hls.huya.com/huyalive/94525224-2475824398-10633584820048887808-2847687532-10057-A-0-1_1200.m3u8";

        return (

            <View style={styles.container}>


                {/*<View style={{alignItems:'center',marginBottom:20}}>
                    <Text style={{fontSize:30,color:'#333333',}}
                          onPress={()=>this.call_button(file1)}   //add
                    >
                        文件1 pdf 测试
                    </Text>
                </View>
                <View style={{alignItems:'center',marginBottom:20}}>
                    <Text style={{fontSize:30,color:'#333333',}}
                          onPress={()=>this.call_button(file3)}   //add
                    >
                        文件3 pdf 测试
                    </Text>
                </View>*/}

                <View style={{alignItems:'center',marginBottom:20}}>
                    <Text style={{fontSize:30,color:'#333333',}}
                          onPress={()=>this.call_button(file2)}   //add
                    >
                        xlsx 测试
                    </Text>
                </View>

                <View style={{alignItems:'center',marginBottom:20}}>
                    <Text style={{fontSize:30,color:'#333333',}}
                          onPress={()=>this.call_button(file6)}   //add
                    >
                        pdf 测试
                    </Text>
                </View>

                <View style={{alignItems:'center',marginBottom:20}}>
                    <Text style={{fontSize:30,color:'#333333',}}
                          onPress={()=>this.call_button(file4)}   //add
                    >
                        docx 测试
                    </Text>
                </View>

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
