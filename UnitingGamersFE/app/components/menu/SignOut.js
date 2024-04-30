import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Clipboard, ScrollView} from 'react-native'
import React from 'react'
let windowWidth = Dimensions.get('window').width
const contWidth = windowWidth * 0.9;
const logoWidth = contWidth * 0.2;
const usernameWidth = contWidth * 0.8;

export default function signOut(){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.font}>Log Out</Text>
            </TouchableOpacity>   
        </View>    
               
);}


const styles = StyleSheet.create({
    button:{
        alignItems: "center",
        backgroundColor: "#9751af",
        padding: 15,
        borderRadius: 50,
        borderColor: 'purple',
        borderWidth: 4
    },
    container:{
        paddingLeft: 15,
        paddingRight: 15
    },
    font:{
        fontSize: 25,
        fontWeight: '300',
        color: 'black'
    }
    

})