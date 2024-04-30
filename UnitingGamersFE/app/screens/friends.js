import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, StatusBar } from 'react-native';
import FriendsHeader from "../components/friends/FriendsHeader";
import FriendsBody from "../components/friends/FriendsBody";
import MenuButton from '../components/profile/BackInfoComps/MenuButton';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Friends(props) {
    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar />
            <StatusBar />
            <SafeAreaView style={styles.screen}>
                <View style={styles.FriendsHeaderContainer}>
                    <FriendsHeader navigation={props.navigation} />
                </View>
                <View style={styles.FriendsContainer}>
                    <FriendsBody username={props.username} email={props.email} key={props.email}></FriendsBody>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        height: windowHeight * 1.0,
        borderRadius: 15,
        borderColor: '#c9b9da',
        borderWidth: 7,
    },
    FriendsHeaderContainer: {
        backgroundColor: 'white',
        flex: 0.15,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    FriendsContainer: {
        backgroundColor: '#f5f5f5',
        flex: 0.85,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    }
})

export default Friends;
