import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
// import React, { useEffect, useState } from 'react'
import * as React from 'react'
import images from "../../assets/social-media-logos/index"
import ConnectBox from './ConnectComps/ConnectBox';
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;

const data = [ // replace this with fetch from db
    {
        social_media: "instagram",
        social_media_username: "cool2beAlex"
    },
    {
        social_media: "discord",
        social_media_username: "lovecrafs#1234"
    }
];
var connection = [];
function Connect(props) {

    // const [connection, setConnection] = React.useState(null);
    const [connection, setConnection] = React.useState([]);
    const params = {
        username : props.username,
        email : props.email
    };
    const URL = 'https://unitinggamers.azurewebsites.net/api/connections/connections/' // placeholder
    const getConnection = React.useCallback(async () => {
        console.log(params.email);
        try {
            
            // response = await axios.get(URL)
            response = await axios.get(URL+params.email).catch(err => console.log("step 1 " + err));
            response = response.data;
            console.log(response);
            // console.log(response);
            setConnection(response); // set connection for use outside function
        }
        catch(err){
            console.log("No connections found")
        }
      }, [])

// TESTING
    React.useEffect (() => {
        getConnection();
        
    }, []);
    // console.log(connection)
    const connections = connection.map(item =>
        <ConnectBox socialImage={images[item.social_media]} socialHandle={item.social_media_username} key={item.social_media_username}></ConnectBox>
    );
    return (
        <View>
            <Text style={styles.header}>Connect With Me!</Text>
            <View style={styles.socialHolder}>
                {connections}
                {/* <ConnectBox socialImage={images.instagram} socialHandle={dummy.instagram}></ConnectBox>
                <ConnectBox socialImage={images.discord} socialHandle={dummy.discord}></ConnectBox> */}
            </View>
        </View>
    )

} 


const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
    },
    socialHolder: {

    }
})
export default Connect;