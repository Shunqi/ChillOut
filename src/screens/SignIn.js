import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Dimensions
} from 'react-native';


const win = Dimensions.get('window');

class LoginScreen extends Component {
  static navigationOptions =
    {
      title: 'Login',
    };
  constructor(props) {
    super(props);
    state = {
      email: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight style={[styles.buttonContainer]}
          onPress={() => this.props.navigation.navigate('SignedIn')}>
          <Image style={styles.fbIcon} source={{ uri: 'https://scontent.fagc2-1.fna.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?_nc_cat=105&_nc_ht=scontent.fagc2-1.fna&oh=c6c186289a3e22e17879c5bebca29639&oe=5CDB42EA' }} resizeMode="contain" />
        </TouchableHighlight>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('SignedIn')}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center'
  },
  fbIcon: {
    height: 45,
    width: 250,
    borderRadius: 20,
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
    backgroundColor: "red",
  },
  loginText: {
    color: 'white',
  }
});

export default LoginScreen;