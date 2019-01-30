
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class ScorePage extends React.Component {
  static navigationOptions = {
    title: 'Score',
  };
  render() {
  	const navigation = this.props.navigation;
  	let username = navigation.getParam('name','defaultName1');

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Blink name = {username}/>
      </View>
    );
  }
 }


 class Blink extends React.Component{
 	constructor(props){
 		super(props);
 		this.state = {'hidden':true};
 		setInterval(()=>{
 			this.setState(preState =>{
 				return {'hidden':!preState.hidden};
 			});
 		},1000);
 	}

 	render(){
 			if (this.state.hidden) {
 				return null;
 			} else {
 				return (
 					<Text>over here {this.props.name}</Text>
 				);
 			}
 	}
 }