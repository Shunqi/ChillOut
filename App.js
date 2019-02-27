import React, {Component} from 'react';
import {Alert, StyleSheet, Button, Text, View, TextInput } from 'react-native';
import LoginView from './src/pages/Login';

import Feed from './src/pages/Feed';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginView />
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
