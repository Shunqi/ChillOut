import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';

const win = Dimensions.get('window');

export const EventCardStyles = StyleSheet.create({
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