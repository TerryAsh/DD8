
import React, {Component} from 'react';
import { WebView } from 'react-native';

export default class ScorePage extends React.Component {
  static navigationOptions = ({navigation})=> {
  	const item = navigation.getParam('match',{'id':"1"});
  	let url = "http://vip.win0168.com/AsianOdds_n.aspx?id=" + item.id;
  	return {title: 'nmd',
			match :item
  	       };
  };

  render() {
  	const navigation = this.props.navigation;
  	const item = navigation.getParam('match',{'id':"1"});
	let uri = 'http://vip.win0168.com/AsianOdds_n.aspx?id=' + item.id;
    return (
    	<WebView  source={{uri:uri}}
                  style={{width:'100%',height:'100%'}}>

		</WebView>
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