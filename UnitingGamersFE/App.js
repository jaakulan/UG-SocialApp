{/* --- Imports Block ---*/}
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, StatusBar, Button, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-native-paper'
import { theme } from './app/core/theme'
{/*Importing pages from our app*/}
import Navigation from "./Navigation";
import Login from "./app/screens/Login";
import Signup from "./app/screens/Signup";

{/* --- Variables Block ---*/}
const Stack = createNativeStackNavigator();

{/* --- Return Functionality Block ---*/}
export default function App() {
    return (
        <Provider theme={theme}>
            <NavigationContainer>
                
                {/*Initial Stack of Screens loaded, with Login being the first page seen*/}
                {/*
                  Note that Navigation Screen is a special screen with access 
                  to navigate the rest of our app after login/signup.
                */}
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{headerShown: false}}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Navigation" component={Navigation} />
                    <Stack.Screen name="Signup" component={Signup} />
                </Stack.Navigator>
            
            </NavigationContainer>
        </Provider>
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
    }
})

{/* Additional Screen Options */}
const screenOptions = {
    headerShown: false,
    drawerStyle: { backgroundColor: '#F6defb', borderTopRightRadius: 20, borderBottomRightRadius: 20 }
}


