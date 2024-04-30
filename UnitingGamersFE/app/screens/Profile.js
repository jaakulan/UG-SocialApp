import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, StatusBar } from 'react-native';
import BackInfo from "../components/profile/BackInfo";
import Bio from "../components/profile/Bio";
import Connect from "../components/profile/Connect";
import GamesContainer from "../components/profile/GamesContainer";
const windowHeight = Dimensions.get('window').height;

function Profile(props){
    return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar />
        <SafeAreaView style={styles.screen}>
            <View style= {styles.BackInfoContainer} >
                <BackInfo navigation={props.navigation} username={props.username} email={props.email} ></BackInfo>
            </View>
            <View style={styles.bioView}>
                <View style= {styles.BioContainer}>
                    <Bio username={props.username} email={props.email}></Bio>
                </View>
            </View>
            <View style={styles.gap}></View>
            <View style= {styles.GamesContainer}>
                <GamesContainer username={props.username} email={props.email}></GamesContainer>
            </View>
            <View style={styles.gap}></View>
            <View style= {styles.ConnectContainer}> 
                <Connect username={props.username} email={props.email}></Connect>
            </View>
        </SafeAreaView>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: windowHeight*1.53,
        alignItems: 'center',
      },
    BackInfoContainer:{
        backgroundColor: 'white',
        height: 410
    },
    bioView:{
        marginTop: '2%'
    },
    BioContainer:{
        backgroundColor: '#f9f3fd',
        borderRadius: 25,
        borderColor: '#c9b9da',
        borderWidth: 3,
        paddingLeft: '2%',
        paddingRight: '2%',
        width: '95%',
    },
    GamesContainer:{
        backgroundColor: '#f9f3fd',
        borderRadius: 12,
        borderColor: '#c9b9da',
        borderWidth: 5,
        width: '95%',
        height: 380
    },
    ConnectContainer:{
        backgroundColor: '#f9f3fd',
        borderRadius: 12,
        borderColor: '#c9b9da',
        borderWidth: 5,
        width: '95%'
    },
    gap:{
        padding: '1%',
    }
})

export default Profile;