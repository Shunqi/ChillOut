import React from 'react';
import { Text, View, Button, FlatList, ActivityIndicator, TextInput, ScrollView, StyleSheet, Dimensions, Image, TouchableHighlight, AsyncStorage } from 'react-native';
import { SafeAreaView, createBottomTabNavigator, createAppContainer, createStackNavigator, StackNavigator } from 'react-navigation';
import { ButtonGroup, Rating, Avatar, ListItem, SocialIcon, Icon, Header } from 'react-native-elements';
import { styles } from '../style/styles';

const win = Dimensions.get('window');
const buttons = ["COMMENT", "LIKE", "JOIN"];
const COMMENT_KEY = 'comment';

class EventDetailScreen extends React.Component {
  static navigationOptions =
    {
      title: 'Event Detail',
    };

  constructor(props) {
    super(props)

  }

  render() {
    const data = this.props.navigation.getParam("data");
    const eventId = this.props.navigation.getParam("eventId");

    return (
      <View >
        {/* leave space for time */}
        <View style={{ height: 20 }}></View>

        {/* top title bar with a back button */}
        <View style={{ alignItems: "center", paddingBottom: 10 }}>
          <Header
            containerStyle={{ backgroundColor: "white" }}
            leftComponent={
              <Icon name="arrow-back" onPress={() => this.props.navigation.navigate('Home')} />
            }
            centerComponent={{ text: 'Event Detail', style: { color: 'black', fontSize: 20 } }}
          />
        </View>

        <DetailCard data={data} eventId={eventId} navigation={this.props.navigation} />

      </View>
    );
  }
}

class DetailCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selectedIndex: 0,
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  componentWillMount() {
    // this.getCommentList(this.props.eventId);
    
    this.getCommentList(this.props.eventId)
      .then(() => {
        console.log("Finished get comment list: " + this.state.comment);
        // this.setState({ comment: comments });
      });
    
  }

  componentDidMount() {
    // let commentList = this.getCommentList();
    // console.log(commentList);
    this.setState({
      isLoading: false,
      data: this.props.data,
    }, function () {

    });
  }

  getCommentList = async (index) => {
    let commentList = {};
    // console.log("id in DetailCard: " + id);

    try {
      commentList = await AsyncStorage.getItem(COMMENT_KEY) || null;
      console.log("commentList:" + commentList);
    }
    catch (error) {
      // Error retrieving data
      console.log(error.message);
    }

    if (commentList !== null) {
      // return commentList[id.toString()];
      let events = await AsyncStorage.getItem('events');
      const size = Object.keys(JSON.parse(events)).length;
      const id = (size - parseInt(index) - 1).toString();
      console.log("size: " + size);
      console.log("index: " + index);
      console.log("id: " + id);

      this.setState({
        comment: JSON.parse(commentList)[id],
      });
    }

    /*
    try {
    commentList = [
    {
      profilePicPath: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg',
      name: 'Jack Pearson',
      comment: 'Wonderful night, hope to see you again buddy.',
    },
    {
      profilePicPath: 'https://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B967C00000578-4428630-image-m-78_1492690605767.jpg',
      name: 'Sarah Gibbson',
      comment: 'I feel like doing this every Saturday night!',
    },
    {
      profilePicPath: 'https://static1.squarespace.com/static/54f74f23e4b0952b4e0011c0/t/5ad54133352f53d0d5f3f106/1523925354554/AmandaMinicucci.jpg?format=2500w',
      name: 'Abigale Watson',
      comment: 'Wow I'm really impressed by these people',
    },
    {
      profilePicPath: 'https://cdn-makehimyours.pressidium.com/wp-content/uploads/2016/11/Depositphotos_9830876_l-2015Optimised.jpg',
      name: 'Laura Ravonhill',
      comment: 'Girls can touch football too!',
    },
    {
      profilePicPath: 'https://www.eharmony.com/blog/wp-content/uploads/2010/04/eHarmony-Blog-profile-picture.jpg',
      name: 'Toby Smith',
      comment: 'Reminds me of high school old days!',
    },
    ];
    } catch (error) {
      console.log("error");
    }
    */

    // console.log("empty commentList");
    return commentList;
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    console.log('id in DetailCard' + this.props.eventId);

    switch (selectedIndex) {
      case 0:
        this.props.navigation.navigate("Comment", {
          eventId: this.props.eventId,
          eventTitle: this.props.data.eventTitle,
        });
        break;
      default:
        break;
    }

  }

  render() {
    const { selectedIndex } = this.state;

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

        {/* Btn Comment Like Join */}
        <View style={{ alignItems: "center" }}>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
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
                <Avatar rounded size="medium" source={{ uri: item['profilePicPath'] }} />
              </View>
              <View style={{ flexDirection: 'column' }}>
                <Text >{item['name']}</Text>
                <Text >{item['comment']}</Text>
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

  constructor(props) {
    super(props);
    this.state = {
      comment: '',
    }
  }

  storeComment = async () => {
    const index = this.props.navigation.getParam('eventId'); // .toString()
    console.log('index in CommentScreen' + index);

    const username = 'test user'; 
    const text = this.state.comment;
    let comments = [];

    const get = (p, o) =>
      p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : [], o)

    try {
      let strList = await AsyncStorage.getItem(COMMENT_KEY) || "{}";
      let commentList = JSON.parse(strList);
      console.log(commentList);
      
      let events = await AsyncStorage.getItem('events');
      const size = Object.keys(JSON.parse(events)).length;
      const id = (size - parseInt(index) - 1).toString();
      comments = get([id], commentList)
      console.log("1: " + comments);
      comments.unshift({
        profilePicPath: 'https://cdn-makehimyours.pressidium.com/wp-content/uploads/2016/11/Depositphotos_9830876_l-2015Optimised.jpg',
        name: username,
        comment: text,
      });
      console.log("2: " + comments);
      commentList[id] = comments;
      console.log(commentList);
      
      await AsyncStorage.setItem(COMMENT_KEY, JSON.stringify(commentList));
      /* */
    }
    catch (error) {
      console.error(error);
      // console.log('error in storeComment in CommentScreen');
    }
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={{ paddingLeft: 10, paddingRight: 10, flexDirection: 'column'}}>
        <Header
          containerStyle={{ backgroundColor: "white" }}
          leftComponent={
            <Icon name="arrow-back" onPress={() => this.props.navigation.goBack()} />
          }
          centerComponent={{ text: this.props.navigation.getParam('eventTitle'), 
                            style: { color: 'black', fontSize: 20 } }}
          rightComponent={{ icon: 'account-circle', color: 'red' }}
        />

        <TextInput style={styles.inputComment}
          placeholder="Enter your comment"
          underlineColorAndroid='transparent'
          onChangeText={(comment) => this.setState({ comment })} />

        <View style={{ justifyContent: 'flex-end' }}>
          <Button 
            style={{ backgroundColor: 'red' }}
            onPress={() => this.storeComment()} title='Reply'/>
        </View>
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