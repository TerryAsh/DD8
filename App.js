/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomePage from './HomePage';
import ScorePage from './ScorePage';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomePage
  },
  Score:{
    screen: ScorePage
  }
});

export default createAppContainer(AppNavigator);