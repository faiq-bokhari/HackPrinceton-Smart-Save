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

change=("./progressscreen.js");

// import lib from '../lib';
const util=require('util');
// lib('leoh.text[@dev]')({
//   rec: '16477025216',
//   body: 'ehhewoiahfoewafeiw'
// }, function(err, result) {
//   console.log(err, result);
// });

export default class firstscreen extends React.Component {
  yourFunction(){
    change=0;
    fetch('https://api.mlab.com/api/1/databases/piggy/collections/newtotals?apiKey=7scoSt13_1noaOg1kbWFK4t6q_-7cGVM')
      .then((response) => response.json())
      .then((responseJson) => {
        var myObject = {'_id':'something', 'merchant_id':'something else','medium': 'another thing','purchase_date': 'another thing','amount': 'another thing','status': 'another thing','description': 'another thing','type': 'another thing','payer_id': 'another thing','payee_id': 'another thing'}

        Number(25/this.state.itemsprice*100).toFixed(2)
        var i=0;
      while(responseJson[i]!=null){
        // value=responseJson[i].amount;
        // var y=Number(responseJson[i].amount).toFixed(0);
        //
        // var x=Number(+value-y).toFixed(2);
        // alert(x);
      //  change=+change+(+x);
        i++;
        }
      let x=responseJson[2].change;
change=Number(x).toFixed(2);
//alert(change);
fetch("https://leoh.lib.id/text@dev/?rec=1"+this.state.phonenumber+"&pc="+Number(change/this.state.itemsprice*100).toFixed(0),{
 method:'GET'});
      //alert(Object.keys(Js).length);
  return change;
    })


      var {navigate}=this.props.navigation;
      navigate("Second",{itemPrice:this.state.itemsprice});
      }
  constructor(props) {
   super(props);
   this.state = { itemsprice:0,phonenumber:""};
   this.counter=0;
}

  onChangeText(text) {
alert(itemsprice);

  };

render(){
  console.log("this.props.navigation= "+util.inspect(this.props.navigation,false,null));
  var {navigate}=this.props.navigation;
  return(
    <KeyboardAvoidingView style={styles.container}>
    <View>
    <Text style={styles.title}>Enter Money Goals</Text>
    </View>

      <View style={styles.inputcontainer}>

        <TextInput
        placeholder="Enter Product or Charity"
        onChangeText={(item) => this.setState({item})}
        value={this.state.item}
        placeholderTextColor="rgba(255, 67, 188, 0.9)"
          style={styles.input}
          />
          <TextInput
          keyboardType='numeric'
          placeholder="Enter Price"
          onChangeText={(itemsprice) => this.setState({itemsprice})}
          value={this.state.itemsprice}
          placeholderTextColor="rgba(255, 67, 188, 0.9)"
            style={styles.input}
            />
          <TextInput
           keyboardType='numeric'
          placeholder="Enter Phone Number (Optional)"
          onChangeText={(phonenumber) => this.setState({phonenumber})}
          value={this.state.phonenumber}
          placeholderTextColor="rgba(255, 67, 188, 0.9)"
            style={styles.input}
            />
      </View>

      <TouchableOpacity
      onPress={
          ()=>this.yourFunction()

        }


      style={styles.buttonContainertwo}>
      <Text style={styles.buttonText}>Submit Goal</Text>

      </TouchableOpacity>
      </KeyboardAvoidingView>


  );
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',

  },
  welcome: {
    marginTop:220,
    fontSize: 50,
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom:10,
    color:'#ff0066',
  },
  title: {
    marginTop:50,
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
marginTop:100,

},
  input:{
    height:40,
    width:300,
    marginBottom:5,
    backgroundColor:'rgba(255, 236, 255, 0.1)',
    color:'#f368e0',
    paddingHorizontal:10,

  },
  buttonContainertwo:{

    backgroundColor:'#e84393',
    width:90,
    paddingVertical:10,
    marginTop:180,
    borderRadius:7
  },
  buttonText:{
    textAlign:'center',
    color:'white',

  },
});
