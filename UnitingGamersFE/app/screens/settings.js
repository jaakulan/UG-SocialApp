import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, StatusBar } from 'react-native';
import SettingsHeader from "../components/settings/SettingsHeader";
import SettingsBody from "../components/settings/SettingsBody";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Settings(props){
    return (
    
    <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar />
        <StatusBar />
        <SafeAreaView style={styles.screen}>
            <View style= {styles.SettingsHeaderContainer}>
                <SettingsHeader navigation={props.navigation}></SettingsHeader>
            </View>
            
            <View style= {styles.SettingsContainer}>
                <SettingsBody navigation={props.navigation} >hello</SettingsBody>
            </View>
        </SafeAreaView>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'column',
        height: windowHeight*1.0,
        borderRadius: 15,
        borderColor: '#c9b9da',
        borderWidth: 7,
      },
    SettingsHeaderContainer:{
        backgroundColor: 'white',
        flex:0.15,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    SettingsContainer:{
        backgroundColor: '#f5f5f5',
        flex:0.85,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    }
})

export default Settings;