import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Clipboard, ScrollView} from 'react-native'
import React, { useState } from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import UGicon from './empty.png'
let windowWidth = Dimensions.get('window').width
const contWidth = windowWidth * 0.9;
const logoWidth = contWidth * 0.2;
const usernameWidth = contWidth * 0.8;

const dummy = { // for specific user
    instagram: "cool2beAlex",
    discord: "lovecrafs#1234",
};

export default function UGHandleMenu(props){
    const copyToClipboard = (username) => {
        Clipboard.setString(username)
    }

    return (
    <View style={styles.socialMedia}>
        <View>
            
            <LinearGradient style={styles.usernameBox} colors={['rgba(145, 71, 156, 0)', 'rgba(208,176,215,255)']} start={{ x: -0.05, y: 1 }} end={{ x: 1, y: 1 }}>
            <ScrollView horizontal={true}>
                <View style={styles.logobox}>
                    <Image source={UGicon} style={styles.logo}></Image>
                </View>
                
                <View style={styles.userText}>
                        <Text style={styles.username}>{props.username}</Text>
                </View> 
                </ScrollView>
            </LinearGradient>
        </View>
    </View>
);}


const styles = StyleSheet.create({
    socialMedia: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 10   
    },
    logo: {
        width: windowWidth/8,
        height: windowWidth/7, 
    },
    logobox:{
        alignItems:'center',
        justifyContent: 'center',
        paddingLeft: windowWidth/30
    },
    usernameBox: {
        borderWidth: 3,
        borderStyle: "solid" ,
        borderColor: "rgba(96, 58, 143, 0.33)",
        borderRadius: 50,
        width: windowWidth/1.50,
        height: logoWidth, //60,
        display: 'flex',
        flexDirection: 'row',
        
        // margin: '5px',
        // textAlignVertical: 'center'
    },
    username: {
        fontSize: windowWidth/18,
        padding: 10,
        paddingTop: 15,
        color: 'purple'
    },
    userText:{
        flex:3,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: -1* (windowWidth/200)
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