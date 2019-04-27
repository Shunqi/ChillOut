import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, StackNavigator } from 'react-navigation';

import { ButtonGroup, Rating, Icon } from 'react-native-elements';

import SearchBar from "../components/SearchBar";
import EventCard from "../components/EventCard";
import NewEvent from "./NewEvent";
import Profile from "./Profile";
import Message from "./Message";
import EventDetail from "../screens/EventDetail";

const win = Dimensions.get('window');
const component1 = () => <Text>LIKE</Text>
const component2 = () => <Text>JOIN</Text>
const buttons = [{ element: component1 }, { element: component2 }]

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

class FriendEventScreen extends React.Component {
  static navigationOptions =
    {
      title: 'Friends',
    };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 20 }}></View>
        <View style={{ width: win.width }}>
          <SearchBar />
        </View>

        <ScrollView>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("EventNav")}>
            <EventCard />
          </TouchableHighlight>

        </ScrollView>
      </View>

    );
  }
}

class NewEventScreen extends React.Component {
  static navigationOptions =
    {
      title: 'New',
    };
  render() {
    return (
      <View>
        <View style={{ height: 20 }}></View>

        <NewEvent />
      </View>
    );
  }
}

class MessageScreen extends React.Component {
  static navigationOptions =
    {
      title: 'Message',
    };
  render() {
    return (
      <Message />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions =
    {
      title: 'Profile',
    };
  render() {
    return (
      <Profile />
    );
  }
}



const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  FriendEvent: { screen: FriendEventScreen },
  NewEvent: { screen: NewEventScreen },
  Message: Message,
  Profile: { screen: ProfileScreen }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return <Icon name='home' color={tintColor} />
        } else if (routeName === 'FriendEvent') {
          return <Icon name='users' type='font-awesome' color={tintColor} />
        } else if (routeName === 'NewEvent') {
          return <Icon name='plus-square' type='font-awesome' color={tintColor} />
        } else if (routeName === 'Message') {
          return <Icon name='paper-plane' type='font-awesome' color={tintColor} />
        } else if (routeName === 'Profile') {
          return <Icon name='account-circle' color={tintColor} />
        }

      },
    }),
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
    },
  });


export default TabNavigator;