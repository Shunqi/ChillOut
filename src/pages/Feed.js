import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {     
    StreamApp,
    FlatFeed,
    Activity,
    LikeButton, } from 'expo-activity-feed';

const CustomActivity = (props) => {
    return (
      <Activity
        {...props}
        Footer={
          <LikeButton {...props} />
        }
      />
    );
  };

export default class Feed extends React.Component {
    static navigationOptions =
    {
      title: 'Feed',
    };

    render() {
        return (
            <SafeAreaView style={{flex: 1}} forceInset={{ top: 'always' }}>
                <StreamApp
                    apiKey="5rqsbgqvqphs"
                    appId="40273"
                    token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiODNlY2M4YWItYjcyMS00NGYzLWI1YmQtYzNkZTk0YTc2ZmFiIn0.wXcz7LR7gQtdr79CPWBJBReqIno3Ao1HyvhwN60hYfM"
                >
                    <FlatFeed
                        Activity={CustomActivity}
                    />
                </StreamApp>
            </SafeAreaView>
        );
    }
  }
