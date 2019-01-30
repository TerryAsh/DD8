
import React, {Component} from 'react';
import {TouchableOpacity,FlatList ,Platform, StyleSheet, Text, View,Button} from 'react-native';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
    this.state = {cloths:["xxx","22"]};
    this.getCloths();
  }

  async getCloths(){
    try{
      let response = await fetch("https://suggest.taobao.com/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3", {
        method: "GET",
      });
      let responseJson = await response.json();
      this.setState(preState =>{
        let cloths = responseJson["result"];
        preState.cloths = cloths;
        return preState;
      });
    } catch(error){
      console.error(error);
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FlatList data = {this.state.cloths} 
                  renderItem={({item}) => {
                  return <HomeListCell item = {item} navigation={this.props.navigation}/>;
                  }}
        />
      </View>
    );
  }
}

class HomeListCell extends React.PureComponent{

  constructor(props){
    super(props);
  }

  _handlePressedItem = ()=>{
    const {navigate} = this.props.navigation;
    navigate('Score', {name: this.props.item});
  };

  render(){
    return(
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={this._handlePressedItem}> 
            <Text> {this.props.item} </Text>
         </TouchableOpacity>
      </View>
    );
  }

}


