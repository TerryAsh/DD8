import React, {Component} from 'react';
import {FlatList ,StyleSheet, Text, View,TextInput ,Button ,DeviceEventEmitter} from 'react-native';
import Constants from '../Constants/Constants'

export default class LoginPage extends React.Component{
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props){
        super(props);
        this.state = {name:"",
                      pwd:""};
    }
    render(){
        return (
            <View style = {{paddingTop:220}}>
                <TextInput
                    placeholder="Name"
                    onChangeText = {(text)=>this.setState({name:text})}
                    style={styles.textInput}
                    maxLength = {30}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText = {(text)=>this.setState({name:text})}
                    style={styles.textInput}
                    maxLength = {30}
                    secureTextEntry = {true}
                />
                <Button
                    title = 'Log in'
                    onPress = {()=>{
                        DeviceEventEmitter.emit(Constants.Notifications.LoginSucceedNotification,{isOk:true});
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput:{
        height:45,
        paddingLeft:15,
        paddingRight:15,
    }
});