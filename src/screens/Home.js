import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';

import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";

const win = Dimensions.get('window');

class HomeScreen extends React.Component {
  static navigationOptions =
    {
      title: 'Home',
    };

  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 20 }}></View>
        <View style={{ width: win.width }}>
          <SearchBar />
        </View>
        
        <ScrollView>
          {/* <TouchableHighlight
            onPress={() => this.props.navigation.navigate("EventDetail")}> */}
          <EventCard />
          {/* </TouchableHighlight> */}

          <EventCard />

          <EventCard />

          <EventCard />

        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;