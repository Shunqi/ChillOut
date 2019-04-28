import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight, AsyncStorage } from 'react-native';

import SearchBar from "../components/SearchBar";

import { EventCardStyles } from "../style/style"

const win = Dimensions.get('window');

class HomeScreen extends React.Component {
    constructor(props) {
        super(props)
        // this._storeData()
        this.state = { hasEvents: false }

        const didFocusListener = this.props.navigation.addListener(
            'didFocus',
            () => {
                this.createEventCards();
            }
          );

    }

    _storeData = async () => {
        try {
            events = []
            await AsyncStorage.setItem('events', JSON.stringify(events));
        } catch (error) {
            // Error saving data
        }
    };   

    createEventCards = async () => {
        cards = []        
        let events = await AsyncStorage.getItem('events');
        events = JSON.parse(events)
        for (let i = 0; i < events.length; i++) {
            cards.push(<EventCard navigation={this.props.navigation} eventId={i} key={i} />)
        }
        if (cards.length > 0) {
            this.setState({ events: cards, hasEvents: true })
        } else {
            this.setState({ events: cards, hasEvents: false })
        }
    }

    render() {
        let cards;
        if (this.state.hasEvents) {
            cards = this.state.events
        } else {
            cards = <Text>No events available now. Let's create a new one!</Text>
        }
        return (
            <View style={{ backgroundColor: "white", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 20 }}></View>
                <View style={{ width: win.width }}>
                    <SearchBar />
                </View>

                <ScrollView>
                    {cards}
                </ScrollView>
            </View>
        );
    }
}



import { ButtonGroup, Rating, Avatar, Icon } from 'react-native-elements';


const component1 = () => <Text>LIKE</Text>
const component2 = () => <Text>JOIN</Text>
const buttons = ["LIKE", "JOIN"]

export class EventCard extends React.Component {

    constructor(props) {
        super(props)
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
            <TouchableHighlight
                onPress={() => this.props.navigation.navigate("EventDetail")}>
                <View style={EventCardStyles.eventCard}>

                    <View style={EventCardStyles.eventCardHead}>
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

                    <View style={EventCardStyles.eventCardBody}>
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
                            containerStyle={EventCardStyles.eventCardTail}
                            type="solid"
                        />
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

export default HomeScreen;