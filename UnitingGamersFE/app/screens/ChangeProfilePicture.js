import React, { useState } from 'react';
// import { nameValidator } from '../helpers/nameValidator'
import { Image, StyleSheet, Picker, View, Button, ScrollView, Text, Alert, TouchableOpacity,  } from 'react-native';
import TextInput from '../components/login/TextInput'
import BackButton from './Back/BackButton'

import dp from '../assets/profile-pictures/profile2.jpg'
import dpBack from '../assets/profile-pictures/background.jpeg'

// replace this with fetch from db
const profilePic = "https://picsum.photos/200";
const backPic = "https://picsum.photos/400/200";

function ChangeProfilePicture(props) {
    {/* --- Functionality of clicking on PFP button --- */}
    const profilePicture = () => {  
        Alert.alert(
            "Success!",
            "Sucessfully updated your profile picture.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    {/* --- Functionality of clicking on Background button --- */}
    const backgroundPicture = () => {
        Alert.alert(
            "Success!",
            "Sucessfully updated your background picture.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    }

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                
                {/* --- Header of the page --- */}
                <View style={styles.headerContainer}>
                  <View style={styles.back}>
                      <BackButton navigation={props.navigation} />
                  </View>
                  <Text style={styles.titleText}>
                        Profile
                  </Text>
                  <Text style={styles.titleText}>
                        Pictures
                  </Text>
                </View>
                
                {/* --- Contents of the page --- */}
                <View style={styles.bodyContainer}>
                  
                  {/*Profile Image*/}
                  <Image source={{uri: profilePic }} style={styles.boxProfile}></Image>
              
                  {/*Profile Button*/}
                  <View style={styles.buttonContainer}>
                      <TouchableOpacity onPress={profilePicture}
                          style={styles.button}>
                          <Text style={styles.button_font}>Change Profile Picture</Text>
                      </TouchableOpacity>
                  </View>
                  
                  {/*Background Image*/}
                  <Image source={{uri: backPic}} style={styles.boxBackground}></Image>
                  
                  {/*Background Button*/}
                  <View style={styles.buttonContainer}>
                  <TouchableOpacity onPress={backgroundPicture}
                      style={styles.button}>
                      <Text style={styles.button_font}>Change Background Picture</Text>
                  </TouchableOpacity>
                  </View>
                </View>

            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    
    boxProfile:{
      width: "30%",
      height: "25%",
      backgroundColor: 'green',
      alignSelf: "center",
      margin: "5%",
      aspectRatio: 1,
    },
    
    boxBackground:{
      width: "70%",
      height: "25%",
      backgroundColor: 'green',
      alignSelf: "center",
      margin: "5%"
    },
    
  
    page: {
        backgroundColor: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 15,
        borderColor: '#c9b9da',
        borderWidth: 7,
    },
    container: {
        display: 'flex',
        height: '100%',
        // alignItems: "center",
        justifyContent: 'flex-start',
    },
    headerContainer:{
      alignItems: "center",
      backgroundColor: 'white',
      flex:0.15,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      marginTop:"3%",
    },
    
    bodyContainer:{
      backgroundColor: '#f5f5f5',
      flex:0.85,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
    
    },
    
    buttonContainer: {
        height: '10%',
        flex: 5,
        marginTop: "5%",
        marginBottom: "5%",
        marginLeft: "10%",
        marginRight: "10%",
    },
    button: {
      backgroundColor: 'white',
      borderWidth: 5,
      borderStyle:'solid',
      borderColor: '#c9b9da',
      borderRadius: 25,
      maxHeight: "200%",
      minHeight: "10%",
      justifyContent: 'center',
      alignItems: 'center'   
    },
    picker: {
        height: '100%',
        width: '100%',
        alignSelf: 'center'
    },
    gamerTag: {
        alignSelf: 'center',
        width: '100%',
    },
    back: {
        width: 48,
        height: 48,
        left: "2%",
        top: "15%",
        position: "absolute",
    },
    titleText: {
        fontSize: 42,
        color: "black",
        marginBottom:"-2%",
        marginTop:"-2%"
        
    },
    button_font:{
      fontSize:20,
      flexDirection: 'column',
      textAlign: 'center',
      
    },
})

export default ChangeProfilePicture;