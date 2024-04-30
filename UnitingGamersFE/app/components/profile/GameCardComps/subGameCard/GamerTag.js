import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Clipboard} from 'react-native'
import React, { useState } from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import copy from "./gameSubAssets/copy.png"

let windowWidth = Dimensions.get('window').width
let windowHeight = Dimensions.get('window').height
const contWidth = windowWidth * 0.9;
const logoWidth = contWidth * 0.2;
const usernameWidth = contWidth * 0.8;

const dummy = { // for specific user
    instagram: "cool2beAlex",
    discord: "lovecrafs#1234",
};

export default function ConnectBox(props){
    const copyToClipboard = (username) => {
        Clipboard.setString(username)
    }

    return (
    <View style={styles.GamerBox}>
        <View style={styles.usernameBox}>
        <ScrollView style={styles.scrollUser}>
            <View style={styles.userText}>
                    <Text style={styles.username}>{props.userName}</Text>
            </View>
        </ScrollView>
            <TouchableOpacity onPress={() => copyToClipboard(props.userName)} style={styles.copy}>
                <Image source={copy} style={styles.copyImg}></Image>
            </TouchableOpacity> 
        </View>
    </View>
);}


const styles = StyleSheet.create({
    GamerBox: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingTop: 5,
        flex: 1
    },
    usernameBox: {
        borderWidth: 3,
        borderStyle: "solid" ,
        borderColor: "white",
        backgroundColor: '#b06cb4',
        borderRadius: 50,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    username: {
        fontSize: 15,
        color: 'white'
    },
    userText:{
        justifyContent: 'center',
        flex:3,
    },
    copy:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    copyImg:{
        height: windowWidth/18,
        width:  windowWidth/18
    },
    
})