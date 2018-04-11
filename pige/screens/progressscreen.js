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
var value=0.00;

change=0.00;
const util=require('util');

export default class firstscreen extends React.Component {


// getData(){
//   return fetch('http://api.reimaginebanking.com/accounts/5abf37cb322fa06b677937d4/purchases?key=3b1eeb3b09c684ef800d53c6509a4c80')
//     .then((response) => response.json())
//     .then((responseJson) => {
//       var myObject = {'_id':'something', 'merchant_id':'something else','medium': 'another thing','purchase_date': 'another thing','amount': 'another thing','status': 'another thing','description': 'another thing','type': 'another thing','payer_id': 'another thing','payee_id': 'another thing'}
//
//       Number(25/this.state.itemsprice*100).toFixed(2)
//       var i=0;
//     while(responseJson[i]!=null){
//       value=responseJson[i].amount;
//       var y=Number(responseJson[i].amount).toFixed(0);
//       var x=Number(+value-y).toFixed(2);
//       change=+change+x;
//       i++;
//       }
// alert(change);
//     //alert(Object.keys(Js).length);
//
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//     module.export=change;
// }
//
//
// componentDidMount(){
//   this.getData();
//   //alert(change);
// }

  static navigationOptions={
    header:null,

  };
  constructor(props){
    super(props)
    this.state={itemsprice:this.props.navigation.state.params.itemsprice};
    }
render(){
  const x=this.state.itemsprice

//aalert(change);
  console.log("this.props.navigation= "+util.inspect(this.props.navigation,false,null));
  var {navigate}=this.props.navigation;
  return(
    <View style={styles.container}>
    <View>
    <Text style={styles.title}> Percent to Completion</Text>

    <Text style={styles.updater}> You are at ${Number(change).toFixed(2)} of your ${x} target</Text>
    </View>




      <Text style={styles.welcome}>{Number(change/this.state.itemsprice*100).toFixed(2)}%</Text>




      <TouchableOpacity
      onPress={
        ()=>navigate("Second",{name:"akram"})
      }
      style={styles.buttonContainertwo}>
      <Text style={styles.buttonText}>Back</Text>

      </TouchableOpacity>
      </View>

  );
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',

  },
  percent:{
    fontSize: 50,
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom:50,
    color:'#ff0066',
  },
  updater:{
    marginTop:100,
    fontSize:20,
  },
  welcome: {
    marginTop:100,
    fontSize: 50,
    fontWeight:'bold',
    textAlign: 'center',
    marginBottom:10,
    color:'#ff0066',
    //width:150,
    //height:72,
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
marginBottom:10,

},
  input:{
    height:40,
    width:300,
    marginBottom:5,
    backgroundColor:'rgba(255, 236, 255, 0.1)',
    color:'white',
    paddingHorizontal:10,

  },
  buttonContainertwo:{

    backgroundColor:'#e84393',
    width:80,
    paddingVertical:10,
    marginTop:100,
    borderRadius:7
  },
  buttonText:{
    textAlign:'center',
    color:'white',

  },
});
