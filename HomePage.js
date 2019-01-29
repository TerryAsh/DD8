
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
  	const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Page</Text>
        <Button
        	title="Go to Score"
        	onPress={() => navigate('Score', {name: 'Jane'})}
      	/>
      </View>
    );
  }
}