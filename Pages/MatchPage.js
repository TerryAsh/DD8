
import React, {Component} from 'react';
import {TouchableOpacity,FlatList ,Dimensions, Modal,StyleSheet, Text, View,Button, DeviceEventEmitter} from 'react-native';
import LoginPage from './LoginPage'
import Constants from '../Constants/Constants'

export default class MatchPage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  constructor(props){
    super(props);
    this.state = {cloths:[{'home':'home',
                           'guest':'guest',
                            'id':'1',
                            time:"00:00"}],
                  hideModal:false};
  }

  componentDidMount(){
      this.getCloths();
      DeviceEventEmitter.addListener(Constants.Notifications.LoginSucceedNotification,(e)=>{
          this.setState(preState =>{
              return {hideModal:true};
          });
      });
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
        //
        var t = new Date(data.substr(0, 4), parseInt(data.substr(4, 2)) - 1, data.substr(6, 2), data.substr(8, 2), data.substr(10, 2), data.substr(10, 2));
        var timeString = new String();
        //hour part
        if (t.getHours() < 10){
            timeString += '0';
        }
        timeString += t.getHours();
        //seprater by ":"
        timeString += ':'
          //min part
          if (t.getMinutes() < 10){
              timeString += '0';
          }
          timeString += t.getMinutes();

        let m = {
            'home': subs[5],
            'guest': subs[6],
            'id': subs[0],
            'time': timeString
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
          <Modal
              animationType='slide'           // 从底部滑入
              transparent={false}             // 不透明
              visible={!this.state.hideModal}    // 根据isModal决定是否显示
              onRequestClose = {()=>{}}
          >
              <LoginPage
              />
          </Modal>
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
      let screenWidth =  Dimensions.get('window').width;
      let textWidth = Dimensions.get('window').width / 3.;

      return (
          <TouchableOpacity onPress={this._handlePressedItem} style={{flex: 1, flexDirection: 'column'}}>
            <View style={styles.cell}>
              <Text style={{width:textWidth, textAlign: 'left',paddingLeft:15}}> {this.props.item.home} </Text>
              <Text style={{textAlign: 'center'}}> {this.props.item.time} </Text>
              <Text style={{width:textWidth ,textAlign: 'right',paddingRight:15}}> {this.props.item.guest} </Text>
            </View>
            <View style={{backgroundColor: 'blue', width: screenWidth, heigth: 1}}>
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
        justifyContent:'space-between'
    }
});
