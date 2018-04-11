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
  Button
} from 'react-native';
import newgoal from 'pige/screens/newgoal';

const util=require('util');

export default class firstscreen extends React.Component {

  static navigationOptions={
    header:null,

  };

  constructor(props){
    super(props)

    this.state={itemPrice:this.props.navigation.state.params.itemPrice,};

  }
render(){

  console.log("this.props.navigation= "+util.inspect(this.props.navigation,false,null));
  var {navigate}=this.props.navigation;
  return(
    <View style={styles.container}>

      <TouchableOpacity
      onPress={
        ()=>navigate("Fourth",{name:"akram"})
      }
      style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Add New Goal</Text>

      </TouchableOpacity>
      <Text style={styles.welcome}>Pick an Option</Text>
      <TouchableOpacity
      onPress={
        ()=>navigate("Third",{itemsprice:this.state.itemPrice})
      }
      style={styles.buttonContainertwo}>
      <Text style={styles.buttonText}>View Progress</Text>

      </TouchableOpacity>
      </View>

  );
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',

  },
  welcome: {
    marginTop:25, 
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom:10,
    color:'black',
  },
  title: {
    marginTop:10,
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom:10,
    color:'#ff0066',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
inputcontainer:{


},
  input:{
    height:30,
    width:300,
    marginBottom:5,
    backgroundColor:'rgba(255, 236, 255, 0.1)',
    color:'white',
    paddingHorizontal:10,

  },
  buttonContainer:{
    marginTop:0,
    backgroundColor:'#e84393',
    width:400,
    height:260,
    paddingVertical:10,
    marginBottom:5,

  },
  buttonContainertwo:{

    backgroundColor:'#e84393',
    width:400,
    height:280,
    paddingVertical:10,
    marginTop:30,

  },
  buttonText:{
    textAlign:'center',
    fontSize:25,
    color:'white',
    lineHeight:200,

  },
});
