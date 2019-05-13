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
    Dimensions,
    WebView,
    TouchableOpacity,
} from 'react-native';

import urlSource from '../data/UrlSource';

const {height,width} = Dimensions.get('window');
type Props = {};
export default class H5 extends Component<Props> {

    constructor(props: any) {
        super(props);
        this.state = {

            value:urlSource[0].value,
            selected:0,
        };
    }

    titleView(item,key){
        return(
            <TouchableOpacity
                key={key}
                onPress={()=>{this.setState({value:item.value,selected:key})}}
                style={{width:width/2-10,margin:5,height:50,backgroundColor:this.state.selected!==key?"#F5FCEE":'white',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:20,}}>{item.name}</Text>
            </TouchableOpacity>

        )
    }
    mainView(item,key){
        return(
            <TouchableOpacity
                key={key}
                onPress={()=>this.showVideo(item.url)}
                style={{width:width/3-10,margin:5,height:50,backgroundColor:"#F5FCEF",alignItems:'center',justifyContent:"center"}}
            >
                <Text style={{fontSize:14,}}>{item.name}</Text>
            </TouchableOpacity>

        )
    }

    showVideo(url){

    }

    render() {

        let htmlStr = '<!DOCTYPE html>\n' +
            '<html>\n' +
            '  <head>\n' +
            '    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
            '    <meta Name="viewport" content="width=device-width, initial-scale=1.0">\n' +
            '    <title>永中文档转换服务</title>\n' +
            '  </head>\n' +
            '  <body>\n' +
            '  <div style="">\n' +
            '        <video src="http://gs.moli.ds.lunbocl.ott.cibntv.net/hls/vCIBNTEADJ/1800/vCIBNTEADJ.m3u8?md5=c246ac4e6b6cb88b7f970b530ff04b86" controls="controls" autoplay="autoplay">\n' +
            '\t\tyour browser does not support the video tag\n' +
            '\t\t</video>\n' +
            '\n' +
            '\t\t\n' +
            '    </div>\n' +
            '  </body>\n' +
            '  \n' +
            '</html>';
        return (

            <View style={styles.container}>

                <WebView style={{flex: 1,height:height,width:width}} source={{html: htmlStr}} scalesPageToFit={true}/>

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
