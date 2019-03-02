


import { createStackNavigator, createAppContainer } from 'react-navigation';

import MessageDetail from "./MessageDetail";
import MessageScreen from "./Message";

const MessageNav = createStackNavigator({
    Message: MessageScreen,
    Detail: MessageDetail,
  },
    {
      initialRouteName: 'Detail',
      headerMode: "none"
    });


export default MessageNav