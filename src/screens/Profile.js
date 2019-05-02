import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, FlatList, TouchableHighlight } from 'react-native';

import { ButtonGroup, Rating, Avatar, ListItem, Icon, Header } from 'react-native-elements';


const win = Dimensions.get('window');


export default class ProfileScreen extends React.Component {

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
            <View style={{ paddingLeft: 10, paddingRight: 10, flex: 1 }}>
                <Header
                    containerStyle={{ backgroundColor: "white" }}
                    centerComponent={{ text: 'My Profile', style: { color: 'black', fontSize: 20 } }}
                    rightComponent={{ icon: 'settings', color: 'red' }}
                />
                <View style={styles.profileHead}>
                    <View style={{ width: win.width / 5, alignItems: "center", paddingTop: 10 }}>
                        <Avatar rounded size="medium" source={{ uri: 'https://pixel.nymag.com/imgs/daily/vulture/2018/05/03/recaps/03-alita-battle-angel.w700.h700.jpg' }} />
                    </View>
                    <View style={{ width: win.width / 4, flexDirection: "column" }}>
                        <Text style={{ fontSize: 25 }}>Alita </Text>
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

                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={["My Event", "My Join", "My Like"]}
                    containerStyle={{ height: 50, borderColor: "white", borderWidth: 0 }}
                    buttonStyle={{ borderWidth: 0, borderColor: "white" }}
                    selectedButtonStyle={{ backgroundColor: "white", borderBottomWidth: 5, borderBottomColor: "red" }}
                    selectedTextStyle={{ color: "black" }}
                />

            {/* <ScrollView> */}
                <FlatList
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                    data={[
                        {
                            title: 'Football Night',
                            date: 'Feb 25, 2019'
                        },
                        {
                            title: 'Tennes Night',
                            date: 'Feb 24, 2019'
                        },
                        {
                            title: 'Film',
                            date: 'Feb 24, 2019'
                        },
                        {
                            title: 'Board Game',
                            date: 'Feb 23, 2019'
                        },
                        {
                            title: 'KTV',
                            date: 'Feb 23, 2019'
                        },
                        {
                            title: 'Dinner',
                            date: 'Feb 21, 2019'
                        },
                        {
                            title: 'TV Show',
                            date: 'Feb 21, 2019'
                        },
                        {
                            title: 'Opera',
                            date: 'Feb 20, 2019'
                        },
                    ]}
                    renderItem={({ item }) => (
                        <TouchableHighlight onPress={() => this.props.navigation.navigate("EventDetail")}>
                            <ListItem
                                title={item.title}
                                subtitle={item.date}
                                style={{ borderBottomWidth: 1, borderBottomColor: "light grey" }}
                            />
                        </TouchableHighlight>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
                {/* </ScrollView> */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileHead: {
        paddingTop: 10,
        flexDirection: 'row',
        height: 80,
    },
})