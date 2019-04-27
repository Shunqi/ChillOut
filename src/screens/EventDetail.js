import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, StackNavigator } from 'react-navigation';

export default class EventDetail extends React.Component {
    static navigationOptions =
    {
      title: 'Event Detail',
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Event Detail</Text>
        </View>
      );
    }
  }