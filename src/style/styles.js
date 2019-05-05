import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';

const win = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    width: win.width
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputComment: {
      fontSize: 30,
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      width: win.width,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  fbIcon: {
    height: 35,
    width: 230,
    borderRadius: 8,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#c44569",
  },
  loginText: {
    color: 'white',
  },
  eventCard: {
    width: win.width,
    height: 250,
    // borderWidth: 0.5,
    // borderColor: "red"
  },
  eventCardBody: {
    height: 145,
    backgroundColor: "lightgrey",
  },
  eventCardHead: {
    // flex:1, // usually causing mistake
    paddingTop: 10,
    flexDirection: 'row',
    height: 80,
  },
  eventCardTail: {
    paddingTop: 0,
    height: 20,
  },
  eventDetailCardHead: {
    paddingTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    height: 80,
  },
  eventDetailCardBody: {
    // flex: 1,
    flexDirection: "column",
    width: win.width,
    // paddingTop: 30,
    backgroundColor: "lightgrey",
  },
  eventCommentCard: {
    // flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    // backgroundColor: "lightgrey",
  },
  btnCommentCardContainer: {
    height: 30,
    width: win.width,
  },
  btnCommentCardBackground: {
    backgroundColor: 'white',
  },
  btnCommentCardSelectedBackground: {
    backgroundColor: '#cf6a87',
  },
  eventRow: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    flexDirection: "row",
    justifyContent:'space-between',
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  eventText: {
    fontSize: 15,
  },
  eventText2: {
    fontSize: 15,
    color: '#c44569',
  },
});