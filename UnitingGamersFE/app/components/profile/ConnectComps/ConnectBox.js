import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Clipboard} from 'react-native'
import React, { useState } from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import copy from "./ConnectAssets/copy.png"

let windowWidth = Dimensions.get('window').width
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
    <View style={styles.socialMedia}>
        <Image source={props.socialImage} style={styles.logoBox} />
        <View>
            <LinearGradient style={styles.usernameBox} colors={['rgba(145, 71, 156, 0)', 'rgba(208,176,215,255)']} start={{ x: 0, y: 1 }} end={{ x: 1, y: 1 }}>
            <View style={styles.userText}>
                <Text style={styles.username}>{props.socialHandle}</Text>
            </View>
            <TouchableOpacity onPress={() => copyToClipboard(props.socialHandle)} style={styles.copy}>
                <Image source={copy} style={styles.copyImg}></Image>
            </TouchableOpacity> 
            </LinearGradient>
        </View>
    </View>
);}


const styles = StyleSheet.create({
    socialMedia: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5,
        width: windowWidth * 0.8,
    },
    logoBox: {
        borderRadius: 50,
        borderColor: '#c9b9da',
        borderWidth: 5,
        width: logoWidth, //60,
        height: logoWidth, //60,
        // margin: '5px'
    },
    usernameBox: {
        borderWidth: 3,
        borderStyle: "solid" ,
        borderColor: "rgba(96, 58, 143, 0.33)",
        borderRadius: 50,
        width: usernameWidth, // 200,
        height: logoWidth, //60,
        display: 'flex',
        flexDirection: 'row',
        
        // margin: '5px',
        // textAlignVertical: 'center'
    },
    username: {
        fontSize: 20,
        padding: 10,
        paddingTop: 15,
    },
    userText:{
        flex:3
    },
    copy:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    copyImg:{
        height: 35,
        width: 35
    }
    

})