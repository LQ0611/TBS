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
    TouchableOpacity,
} from 'react-native';

import urlSource from '../data/UrlSource';

const {height,width} = Dimensions.get('window');
type Props = {};
export default class Video extends Component<Props> {

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
        NativeModules.RNActivity.showVideo(url);
    }

    render() {

        console.log("data："+urlSource);
        return (

            <View style={styles.container}>

                <ScrollView style={{flex:1}}>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                        {
                            urlSource.map((item,key)=>
                                this.titleView(item,key)
                            )
                        }
                    </View>
                </ScrollView>


                <ScrollView style={{flex:4}}>
                    <View style={{flex:5,flexDirection:'row',justifyContent:'flex-start',flexWrap:'wrap'}}>
                    {
                        this.state.value!==undefined&&
                        this.state.value.map((item,key)=>
                            this.mainView(item,key)
                        )
                    }
                    </View>
                </ScrollView>

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
