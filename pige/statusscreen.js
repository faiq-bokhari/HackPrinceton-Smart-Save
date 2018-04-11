/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  navigate(routeName){
    this.props.navigator.push({

    })
  }
  render() {
    return (

      <KeyboardAvoidingView style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Pig-e
        </Text>


      <View style={styles.inputcontainer}>
      <TextInput
        placeholder="Product desired to purchase"
        placeholderTextColor="rgba(232, 239, 255, 0.9)"
        style={styles.input}
        />
        <TextInput
        placeholder="Account ID"
        placeholderTextColor="rgba(232, 239, 255, 0.9)"
          style={styles.input}
          />
      </View>

      <TouchableOpacity onPress={this.navigate.bind(this,'status')} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Save Information</Text>
      </TouchableOpacity>

      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom:100,
    color:'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
inputcontainer:{
marginBottom:100,

},
  input:{
    height:40,
    width:300,
    marginBottom:15,
    backgroundColor:'rgba(255, 236, 255, 0.1)',
    color:'white',
    paddingHorizontal:10,

  },
  buttonContainer:{
    backgroundColor:'#576574',
    width:300,
    paddingVertical:10,
    marginBottom:100,
  },
  buttonText:{
    textAlign:'center',
    color:'white',

  },
});
