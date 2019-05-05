import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, FlatList, TextInput } from 'react-native';

import { ButtonGroup, Rating, Avatar, ListItem, Icon, Header } from 'react-native-elements';


const win = Dimensions.get('window');


export default class MessageDetail extends React.Component {

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
                    leftComponent={
                        <Icon name="arrow-back" onPress={() => this.props.navigation.goBack()} />
                    }
                    centerComponent={{ text: 'Amy Farha', style: { color: 'black', fontSize: 20 } }}
                    rightComponent={{ icon: 'account-circle', color: '#c44569' }}
                />

                <TextInput style={styles.inputs}
                    placeholder="Phone Number"
                    keyboardType="number-pad"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({ email })} />
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