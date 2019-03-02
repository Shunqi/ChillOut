import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput } from 'react-native';

import { ButtonGroup, Rating, Button } from 'react-native-elements';


const win = Dimensions.get('window');


export default class NewEvent extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedIndex: 1
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {
        const buttons = ['All', "Friends"]
        const { selectedIndex } = this.state

        return (
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <View style={{ alignItems: "center", paddingBottom: 10 }}>
                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        containerStyle={{ height: 40, borderRadius: 20, width: 200, opacity: 100, borderWidth: 1, borderColor: "red" }}
                        buttonStyle={{ height: 40 }}
                        selectedButtonStyle={{ backgroundColor: "red" }}
                    />
                </View>

                <View>
                    <Text style={styles.titleFont}>Location</Text>
                    <TextInput style={styles.contentFont} placeholder="Enter location"></TextInput>

                    <Text style={styles.titleFont}>Time</Text>
                    <TextInput style={styles.contentFont} placeholder="Enter time"></TextInput>

                    <Text style={styles.titleFont}>Maximum People</Text>
                    <TextInput style={styles.contentFont} placeholder="Enter maximum people"></TextInput>

                    <Text style={styles.titleFont}>Additional Information</Text>
                    <TextInput style={styles.contentFont} placeholder="Optional"></TextInput>

                </View>

                <View style={{ height: win.height / 3, justifyContent: 'flex-end' }}>
                    <Button
                        title="Submit"
                        buttonStyle={{ backgroundColor: "red" }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleFont: {
        fontSize: 25,
        color: "red",
    },
    contentFont: {
        fontSize: 20,
        color: "black",
        paddingBottom: 15
    }
})