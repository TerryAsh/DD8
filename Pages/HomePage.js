
import React, {Component} from 'react';
import {TouchableOpacity,FlatList ,Platform, Image,StyleSheet, Text, View,Button} from 'react-native';

export default class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
    this.state = {cloths:[{'home':'home',
                           'guest':'guest',
                            'id':'1',
                            time:"00:00"}],
                  originText:""};
    this.getCloths();
  }

  async getCloths(){
    try{
      let url = 'http://m.win007.com/phone/Schedule_0_0.txt';
      let response = await fetch(url, {
        method: "GET",
      });
      let responseString = await response.text();
      this._manageClothString(responseString);
    } catch(error){
      console.error(error);
    }
  }

  _manageClothString(clothOriginString){
      var subStrings = clothOriginString.split('$$');
      let cloths = subStrings[1].split('!');

      let ms = new Array();
      for (let i = 0; i < cloths.length ; i++) {
        let subs = cloths[i].split('^');
        let data = subs[3];
        var t = new Date(data.substr(0, 4), parseInt(data.substr(4, 2)) - 1, data.substr(6, 2), data.substr(8, 2), data.substr(10, 2), data.substr(10, 2));
        let m = {
            'home': subs[5],
            'guest': subs[6],
            'id': subs[0],
            'time': t.getHours() + ':' +t.getMinutes()
        }
        ms.push(m);
      }
      this.setState(preState =>{
          preState.cloths = ms;
          return preState;
      });
  }

  render() {
    return (
      <View style={{ flex: 1}}>

        <FlatList data = {this.state.cloths}

                  renderItem={({item}) => {
                  return <HomeListCell style={{heigth: 45}} item = {item} navigation={this.props.navigation}/>;
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
    navigate('Score', {match: this.props.item});
  };

  render(){
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return(
        <TouchableOpacity onPress={this._handlePressedItem} style={{ flex: 1, flexDirection: 'row',}}>
            <View style = {styles.cell}>
                <Text styles = {{width:33}}> {this.props.item.home} </Text>
                <Text> {this.props.item.time} </Text>
                <Text> {this.props.item.guest} </Text>
            </View>
         </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
    cell:{
        paddingTop: 22,
        paddingBottom:22,
        flex:1 ,
        flexDirection:'row',
        justifyContent : 'space-between'
    },
    list:{

    }
});
