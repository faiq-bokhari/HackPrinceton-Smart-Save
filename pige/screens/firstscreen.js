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
  KeyboardAvoidingView,
  Navigator,
  Image
} from 'react-native';
const util=require('util');
import Secondscreen from './Secondscreen';
type Props = {};
export default class firstscreen extends React.Component {
static navigationOptions={
  header:null,

};
  render() {
    console.log("this.props.navigation= "+util.inspect(this.props.navigation,false,null));
    var {navigate}=this.props.navigation;
    return (

      <KeyboardAvoidingView style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to Pig<Text style={styles.Efor}>e</Text>
        </Text>
<Image style={styles.pic} source={require('pige/piggy_logo.png')} />

      <View style={styles.inputcontainer}>

        <TextInput
         keyboardType='numeric'
        placeholder="Account ID"
        placeholderTextColor="rgba(255, 67, 188, 0.9)"
          style={styles.input}
          />
      </View>

      <TouchableOpacity
      onPress={
        ()=>navigate("Second",{name:"akram"})
      }
      style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Login</Text>

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
    backgroundColor: 'white',

  },
  Efor:{
fontSize:33,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom:40,
    color:'#e84393',
    fontWeight:'bold'
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
    backgroundColor:'rgba(255, 67, 188, 0.1)',
    color:'#f368e0',
    paddingHorizontal:10,

  },
  buttonContainer:{
    borderRadius:7,
    backgroundColor:'#e84393',
    width:100,
    paddingVertical:10,
    marginBottom:100,
  },
  buttonText:{
    textAlign:'center',
    color:'white',

  },
  pic:{
    borderRadius:5,
    height:100,
    width:100,
  },
});
