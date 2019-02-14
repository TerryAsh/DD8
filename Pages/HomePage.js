
import React, {Component} from 'react';
import {TouchableOpacity,FlatList ,Dimensions, Modal,StyleSheet, Text, View,Button, DeviceEventEmitter,NativeModules} from 'react-native';

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
       let router = NativeModules.AshRouter;
       router.presentChatView();
    }

    render(){
        return (
            <View/>
        );
    }
}