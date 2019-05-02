import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TextInput, AsyncStorage, Alert } from 'react-native';

import { ButtonGroup, Rating, Button, Header } from 'react-native-elements';


const win = Dimensions.get('window');


export default class NewEvent extends React.Component {

    constructor() {
        super()
        this.state = {
            selectedIndex: 1,
            eventTitle: "",
            location: "",
            time: "",
            maxCapacity: "",
            description: ""
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
                <View style={{ height: 20 }}></View>
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
                    <Text style={styles.titleFont}>Title</Text>
                    <TextInput 
                        style={styles.contentFont} 
                        placeholder="Enter title"
                        onChangeText = {(text) => this.setState({eventTitle: text})}
                    ></TextInput>

                    <Text style={styles.titleFont}>Location</Text>
                    <TextInput 
                        style={styles.contentFont} 
                        placeholder="Enter location"                    
                        onChangeText = {(text) => this.setState({location: text})}
                    ></TextInput>

                    <Text style={styles.titleFont}>Time</Text>
                    <TextInput 
                        style={styles.contentFont} 
                        placeholder="Enter time"
                        onChangeText = {(text) => this.setState({time: text})}
                    ></TextInput>

                    <Text style={styles.titleFont}>Maximum People</Text>
                    <TextInput 
                        style={styles.contentFont} 
                        placeholder="Enter maximum people"                        
                        onChangeText = {(text) => this.setState({maxCapacity: text})}
                    ></TextInput>

                    <Text style={styles.titleFont}>Additional Information</Text>
                    <TextInput 
                        style={styles.contentFont} 
                        placeholder="Optional"
                        onChangeText = {(text) => this.setState({description: text})}
                    ></TextInput>

                </View>

                <View style={{ height: win.height / 4, justifyContent: 'flex-end' }}>
                    <Button
                        title="Submit"
                        buttonStyle={{ backgroundColor: "red" }}
                        onPress={async () => {
                            let events = await AsyncStorage.getItem('events');
                            if (!events) {
                                events = []
                            } else {
                                events = JSON.parse(events);
                            }
                            data = { 
                                name: 'Alita',
                                title: 'CMU MSIT Student',
                                distance: '300 m',
                                timeLeft: '30 min',
                                curJoin: 1,
                                minJoin: '5 minimum',
                              }
                            if (this.state["eventTitle"] === "" 
                                || this.state["location"] === "" 
                                || this.state["time"] === ""
                                || this.state["maxCapacity"] === "") {
                                Alert.alert(
                                    'Please enter required information',
                                    '',
                                    [
                                      {text: 'OK'}
                                    ],
                                    {cancelable: false},
                                );
                            } else {
                                data = Object.assign({}, data, this.state);
                                events.unshift(data);
                                await AsyncStorage.setItem('events', JSON.stringify(events));
                                this.props.navigation.navigate("EventDetail", {data: data});
                            }
                        }}
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