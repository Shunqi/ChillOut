import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, FlatList, TouchableHighlight } from 'react-native';

import { ButtonGroup, Rating, Avatar, ListItem, SocialIcon, Header } from 'react-native-elements';

import { createStackNavigator, createAppContainer } from 'react-navigation';


const win = Dimensions.get('window');


class Message extends React.Component {

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
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Header
                    containerStyle={{ backgroundColor: "white" }}
                    centerComponent={{ text: 'Message', style: { color: 'black', fontSize: 20 } }}
                    rightComponent={
                        <SocialIcon
                            size={10}
                            type='facebook'
                        />}
                />

                <View>
                    <FlatList
                        style={{ paddingLeft: 10, paddingRight: 10 }}
                        data={[
                            {
                                name: 'Amy Farha',
                                avatar_url: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' },
                                message: 'Hi, where are you?'
                            },
                            {
                                name: 'Chris Jackson',
                                avatar_url: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' },
                                message: 'Wanna go out and have a meal'
                            },
                        ]}
                        renderItem={({ item }) => (
                            <TouchableHighlight
                                onPress={() => this.props.navigation.navigate("MessageDetail")}>
                                <ListItem
                                    title={item.name}
                                    subtitle={item.message}
                                    subtitleStyle={{ color: "grey" }}
                                    leftAvatar={{ source: item.avatar_url, size: "medium" }}
                                    style={{ height: 80, borderBottomWidth: 1, borderBottomColor: "#D3D3D3" }}
                                />
                            </TouchableHighlight>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    profileHead: {
        // flex:1,
        paddingTop: 10,
        flexDirection: 'row',
        height: 80,
    },
})


export default Message