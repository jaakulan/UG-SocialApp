{/* --- Imports Block ---*/}
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, StatusBar, Button, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
{/*Importing pages from our app*/}
import Settings from "./app/screens/settings";
import UGHandleMenu from './app/components/menu/UGHandleMenu';
import SignOut from './app/components/menu/SignOut';
import Profile from './app/screens/Profile';
import Friends from './app/screens/friends';
import addGamecard from './app/screens/AddGamecard';
import ChangeProfilePicture from './app/screens/ChangeProfilePicture';
import FriendsBody from './app/screens/friends';

{/* --- Variables Block ---*/}
let windowHeight = Dimensions.get('window').height;
const Drawer = createDrawerNavigator();
const username = 'therealspiderman'
const email = 'spider@gamil.com'


{/* Main return function, uses the helper above*/}
export default function Navigation() {
    return (
        <SafeAreaView style={styles.screenArea}>
            <MyStack />
        </SafeAreaView>

    );
}

{/* --- Helper Functions Block ---*/}
function profile({ navigation }) {
    return ( <Profile navigation={navigation} username={username} email={email}/> );
}

function settings({ navigation }) {
    return ( <Settings navigation={navigation} username={username} email={email}/> );
}

function friends({ navigation }) {
    return ( <FriendsBody navigation={navigation} username={username} email={email}/> );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <UGHandleMenu username={username} />
            <View style={styles.options}>
                <View>
                    <DrawerItemList {...props} />
                </View>
                <View style={styles.signOutBox}>
                    <SignOut />
                </View>
            </View>

        </DrawerContentScrollView>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} initialRouteName="Profile" screenOptions={screenOptions}>
            <Drawer.Screen options={selectScreen} name="Profile" component={profile} />
            <Drawer.Screen options={selectScreen} name="Friends" component={friends} />
            <Drawer.Screen options={selectScreen} name="Settings" component={settings} />

        </Drawer.Navigator>
    );
}

{/* --- Return Functionality Block ---*/}
const AppStack = createStackNavigator();

const MyStack = () => {
  return(
    <AppStack.Navigator initialRouteName="Drawer">
      <AppStack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }}/>
      <AppStack.Screen name="addGamecard" component={addGamecard} options={{ headerShown: false }} />
      <AppStack.Screen name="changeProfilePicture" component={ChangeProfilePicture} options={{ headerShown: false }} />
    </AppStack.Navigator>
  );
}


{/* --- Stylesheet Block ---*/}
const styles = StyleSheet.create({
    screenArea: {
        backgroundColor: 'pink',
        flex: 1,
        display: 'flex'
    },
    screen: {
        flex: 1
    },
    options: {
        height: windowHeight / 1.2,
        display: 'flex',
        justifyContent: 'space-between'
    },
    signOutBox: {

    },
    item: {
        color: 'purple',
        fontSize: 25
    },
    hidden:{
        display: 'none'
    }


})

{/* Additional Screen Options */}
const screenOptions = {
    headerShown: false,
    drawerStyle: { backgroundColor: '#F6defb', borderTopRightRadius: 20, borderBottomRightRadius: 20 }
}

const selectScreen = {
    drawerLabelStyle: styles.item, drawerActiveTintColor: 'purple'
}

const noScreen = {
    drawerLabelStyle: styles.hidden, drawerActiveTintColor: '#F6defb'
}
