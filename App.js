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

import {Icon,TabBar,SearchBar} from 'antd-mobile-rn';
import File from './RNCode/screen/File';
import Video from './RNCode/screen/Video';

type Props = {};
export default class App extends Component<Props> {

    constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: 'video',
        };
    }

    onChangeTab(tabName: any) {
        this.setState({
            selectedTab: tabName,
        });
    }

    renderContent(pageText: any) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <SearchBar placeholder="Search" showCancelButton />
                <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>
        );
    }

  render() {

      return (
          <TabBar
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="#f5f5f5"
          >
              <TabBar.Item
                  title="file"
                  icon={<Icon name="home" />}
                  selected={this.state.selectedTab === 'file'}
                  onPress={() => this.onChangeTab('file')}
              >
                  <File/>
              </TabBar.Item>
              <TabBar.Item
                  icon={<Icon name='ordered-list' />}
                  title="video"
                  selected={this.state.selectedTab === 'video'}
                  onPress={() => this.onChangeTab('video')}
              >
                  <Video/>
              </TabBar.Item>
          </TabBar>

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
