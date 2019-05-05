import React from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';

const win = Dimensions.get('window');

export const EventCardStyles = StyleSheet.create({
    eventCard: {
        width: win.width,
        height: 260,
        // borderWidth: 0.5,
        // borderColor: "red"
    },
    eventCardBody: {
        height: 115,
        backgroundColor: "lightgrey",
    },
    eventCardHead: {
        // flex:1,
        paddingTop: 5,
        flexDirection: 'row',
        height: 80,
    },
    eventCardTail: {
        paddingTop: 0,
        height: 20,
    }
})