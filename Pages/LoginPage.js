import React, {Component} from 'react';
import {FlatList ,StyleSheet, Text, View,TextInput ,Button ,DeviceEventEmitter} from 'react-native';

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
            <View>
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
                    title = 'submit'
                    onPress = {()=>{
                        DeviceEventEmitter.emit("AshOnLoginedNotify",{isOk:true});
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
        paddingRight:15
    }
});