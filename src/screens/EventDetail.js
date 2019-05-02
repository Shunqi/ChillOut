// import React from 'react';
// import { Text, View, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
// import { createBottomTabNavigator, createAppContainer, createStackNavigator, StackNavigator } from 'react-navigation';

// export default class EventDetail extends React.Component {
//     static navigationOptions =
//     {
//       title: 'Event Detail',
//     };

//     constructor(props) {
//       super(props)
//   }

//     render() {
//       const data = this.props.navigation.getParam("data");
//       return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Event Detail</Text>
//           <Text>{data["name"]}</Text>
//           <Text>{data["title"]}</Text>
//           <Text>Event Detail</Text>
//           <Text>Event Detail</Text>
//           <Text>Event Detail</Text>
//         </View>
//       );
//     }
//   }

import React from 'react';
import { Text, View, Button, FlatList, ActivityIndicator, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import { SafeAreaView, createBottomTabNavigator, createAppContainer, createStackNavigator, StackNavigator } from 'react-navigation';
import { ButtonGroup, Rating, Avatar, ListItem, SocialIcon, Icon, Header } from 'react-native-elements';
import { styles } from '../style/styles';

const win = Dimensions.get('window');
const buttons = ["COMMENT", "LIKE", "JOIN"]

class EventDetailScreen extends React.Component {
  static navigationOptions =
    {
      title: 'Event Detail',
      eventId: 0,
    };

  constructor(props) {
    super(props)
  }

  render() {
    const data = this.props.navigation.getParam("data");
    return (
      <View >
        {/* leave space for time */}
        <View style={{ height: 20 }}></View>

        {/* top title bar with a back button */}
        <View style={{ alignItems: "center", paddingBottom: 10 }}>
          <Header
            containerStyle={{ backgroundColor: "white" }}
            leftComponent={
              <Icon name="arrow-back" onPress={() => this.props.navigation.goBack()} />
            }
            centerComponent={{ text: 'Event Detail', style: { color: 'black', fontSize: 20 } }}
          />
        </View>

        <DetailCard data={data}/>

      </View>
    );
  }
}

class DetailCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
      data: this.props.data,
      comment: [
        {
          profilePicPath: 'https://XXX.jpg',
          name: 'Commentor 1',
          comment: 'Comment1',
        },
        {
          profilePicPath: 'https://XXX.jpg',
          name: 'Commentor 2',
          comment: 'Comment2',
        },
        {
          profilePicPath: 'https://XXX.jpg',
          name: 'Commentor 3',
          comment: 'Comment3',
        },
        {
          profilePicPath: 'https://XXX.jpg',
          name: 'Commentor 4',
          comment: 'Comment4',
        },
        {
          profilePicPath: 'https://XXX.jpg',
          name: 'Commentor 5',
          comment: 'Comment5',
        },
      ],
    }, function () {

    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    // console.log(this.state.dataSource);
    return (
      <View >
        {/* head */}
        <View style={styles.eventDetailCardHead}>
          <View style={{ width: win.width / 5, alignItems: "center" }}>
            <Avatar rounded size="medium" source={{ uri: 'https://pixel.nymag.com/imgs/daily/vulture/2018/05/03/recaps/03-alita-battle-angel.w700.h700.jpg' }} />
          </View>
          <View style={{ width: win.width / 3, flexDirection: "column" }}>
            <Text style={{ fontSize: 25 }}> {this.state.data.name} </Text>
            <Text>{this.state.data.title}</Text>
          </View>
          <View style={{ paddingBottom: 10, alignItems: "center" }}>
            <Rating
              type="custom"
              showRating
              imageSize={20}
              ratingColor='red'
            />
          </View>
        </View>

        {/* body */}

        {/* <ScrollView stickyHeaderIndices={[0]} contentInsetAdjustmentBehavior="automatic"> */}
        {/* <SafeAreaView> */}
        <View style={styles.eventDetailCardBody}>
          <View style={{ paddingTop: 5, paddingBottom: 10, justifyContent: 'center' }}>

            <View style={styles.eventRow}>
              <Text style={styles.eventTitle}>{this.state.data.eventTitle}</Text>
            </View>
            <View style={styles.eventRow}>
              <Text style={styles.eventText}>{this.state.data.location}</Text>
              <Text style={styles.eventText2}>{this.state.data.distance}</Text>
            </View>
            <View style={styles.eventRow}>
              <Text style={styles.eventText}>{this.state.data.time}</Text>
              <Text style={styles.eventText2}>{this.state.data.timeLeft}</Text>
            </View>
            <View style={styles.eventRow}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.eventText}>{this.state.data.curJoin} / {this.state.data.maxCapacity}</Text>
                {/* <Text style={styles.eventText}>{this.state.data.curJoin} / {this.state.data.maxCapacity}</Text> */}
              </View>
              <Text style={styles.eventText2}>{this.state.data.minJoin}</Text>
            </View>
            <View style={styles.eventRow}>
              <Text style={styles.eventTitle}>{this.state.data.description}</Text>
            </View>
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <ButtonGroup
            // onPress={this.updateIndex}
            // selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={{ backgroundColor: "red" }}
            selectedTextStyle={{ color: "white" }}
            containerStyle={styles.btnCommentCardContainer}
            buttonStyle={styles.btnCommentCardBackground}
            type="solid"
          />
        </View>

        <FlatList style={{ paddingLeft: 10, color: 'green' }}
          data={this.state.comment}
          renderItem={({ item }, index) =>
            // <Text>{item.name}, {item.comment}</Text>
            <View style={styles.eventCommentCard} key={index}>
              <View style={{ width: win.width / 5 }}>
                <Avatar rounded size="medium" source={{ uri: 'https://pixel.nymag.com/imgs/daily/vulture/2018/05/03/recaps/03-alita-battle-angel.w700.h700.jpg' }} />
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text >{item.name}</Text>
                <Text >{item.comment}</Text>
              </View>
            </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />




      </View>
    );
  }
}


class CommentScreen extends React.Component {
  static navigationOptions =
    {
      title: 'Event Comment',
    };
  render() {
    return (
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Header
          containerStyle={{ backgroundColor: "white" }}
          leftComponent={
            <Icon name="arrow-back" onPress={() => this.props.navigation.goBack()} />
          }
          centerComponent={{ text: title, style: { color: 'black', fontSize: 20 } }}
          rightComponent={{ icon: 'account-circle', color: 'red' }}
        />

        <TextInput style={styles.inputComment}
          placeholder="Enter your comment"
          keyboardType="number-pad"
          underlineColorAndroid='transparent'
          onChangeText={(email) => this.setState({ email })} />

        <Button>Reply</Button>
      </View>
    );
  }
}



const MainNavigator = createStackNavigator({
  EventDetail: EventDetailScreen,
  Comment: CommentScreen,
  // Map: MapSceen,
},
  {
    initialRouteName: 'EventDetail',
    headerMode: "none"
  });

export default MainNavigator;