import React from 'react';
import { createBottomTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SignIn from "./screens/SignIn"

import Home from "./screens/Home"
import NewEvent from "./screens/NewEvent"
import Message from "./screens/Message"
import Profile from "./screens/Profile"

import EventDetail from "./screens/EventDetail"
import MessageDetail from "./screens/MessageDetail"
import FriendList from "./screens/FriendList"

export const SignedOut = createStackNavigator(
    {
        SignUp: {
            screen: SignIn
        },
        SignIn: {
            screen: SignIn
        }
    },
    {
        headerMode: "none",
    }
);

export const HomeScreen = createStackNavigator(
    {
        Home: { screen: Home },
        // EventDetail: { screen: EventDetail }
    },
    {
        headerMode: "none",
    }
);

export const NewEventScreen = createStackNavigator({
    NewEvent: { screen: NewEvent },
    // EventDetail: { screen: EventDetail }
},
{
    headerMode: "none",
});

export const MessageScreen = createStackNavigator({
    MessageList: { screen: Message },
    // MessageDetail: { screen: MessageDetail }
},
{
    headerMode: "none",
});

export const ProfileScreen = createStackNavigator({
    Profile: { screen: Profile },
    // EventDetail: { screen: EventDetail }
},
{
    headerMode: "none",
});

export const Main = createBottomTabNavigator({
    Home: { screen: HomeScreen },
    NewEvent: { screen: NewEventScreen },
    Message: { screen: MessageScreen },
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
    }
);

export const SignedIn = createStackNavigator({
    Main: { screen: Main },
    EventDetail: { screen: EventDetail },
    MessageDetail: { screen: MessageDetail },
    FriendList: { screen: FriendList }
},
{
    headerMode: "none",
    initialRouteName: "Main"
});

export const createLoginNav = (signedIn) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};