import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';

import { createBottomTabNavigator, createAppContainer, createStackNavigator, StackNavigator } from 'react-navigation';
import { ButtonGroup, Rating, Avatar, Icon } from 'react-native-elements';

import EventDetail from "../screens/EventDetail";

const win = Dimensions.get('window');
const component1 = () => <Text>LIKE</Text>
const component2 = () => <Text>JOIN</Text>
const buttons = ["LIKE", "JOIN"]

export default class EventCard extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const { selectedIndex } = this.state
        return (
            <TouchableHighlight>
                {/* onPress={() => this.props.navigation.navigate("EventDetail")}> */}
                <View style={styles.eventCard}>

                    <View style={styles.eventCardHead}>
                        <View style={{ width: win.width / 5, alignItems: "center" }}>
                            <Avatar rounded size="medium" source={{ uri: 'https://pixel.nymag.com/imgs/daily/vulture/2018/05/03/recaps/03-alita-battle-angel.w700.h700.jpg' }} />
                        </View>
                        <View style={{ width: win.width / 3, flexDirection: "column" }}>
                            <Text style={{ fontSize: 25 }}> Alita </Text>
                            <Text>CMU MSIT Student</Text>
                        </View>
                        <View style={{ paddingLeft: 60, paddingBottom: 10 }}>
                            <Rating
                                type="custom"
                                showRating
                                imageSize={20}
                                ratingColor='red'
                            />
                        </View>
                    </View>

                    <View style={styles.eventCardBody}>
                        <View style={{ paddingLeft: 10, paddingTop: 10 }}>
                            <Text style={{ fontSize: 20 }}>Come Play Tennie Together!</Text>
                            <Text>01 / 15</Text>
                            <Text>3:00 PM, Tuesday, Feburary 26</Text>
                            <Text>CMU Tennis court</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <ButtonGroup
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            selectedButtonStyle={{ backgroundColor: "red" }}
                            selectedTextStyle={{ color: "white" }}
                            containerStyle={styles.eventCardTail}
                            type="solid"
                        />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    eventCard: {
        width: win.width,
        height: 250,
        borderWidth: 0.5,
        borderColor: "red"
    },
    eventCardBody: {
        height: 145,
        backgroundColor: "lightgrey",
    },
    eventCardHead: {
        // flex:1,
        paddingTop: 10,
        flexDirection: 'row',
        height: 80,
    },
    eventCardTail: {
        paddingTop: 0,
        height: 20,
    }
})



// const EventNav = createStackNavigator(
//     {
//         Event: {screen: EventCard},
//         EventDetail: { screen: EventDetail }
//     },
//     {
//         initialRouteName: "Event"
//     });

// export default class test extends React.Component {
//     render() {
//         return (
//             <EventNav />
//         );
//     }
// }