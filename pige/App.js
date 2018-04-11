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
  Navigator
} from 'react-native';

import{StackNavigator} from 'react-navigation';
import firstscreen from './screens/firstscreen';
import Secondscreen from './screens/Secondscreen';
import progressscreen from './screens/progressscreen';
import newgoal from './screens/newgoal';

const Navigation=StackNavigator({
  First:{screen:firstscreen},
  Second:{screen:Secondscreen},
  Third:{screen:progressscreen},
  Fourth:{screen:newgoal}
});

export default Navigation;
