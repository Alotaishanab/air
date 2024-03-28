import React, { Component } from 'react';
import { View, LogBox } from 'react-native';
import RootNavigation from './Navigation/AppNavigation';

LogBox.ignoreAllLogs(true)
LogBox.ignoreLogs(['Sending']);

class Root extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RootNavigation />
      </View>
    );
  }
}
export default Root;
