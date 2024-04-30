import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, View, Image} from 'react-native'
import { Text } from 'react-native-elements';
import MenuButton from '../profile/BackInfoComps/MenuButton';

export default function SettingsHeader(props) {
    
        return (
            <View style={styles.container}>
                    <View style={styles.menu}>
                        <MenuButton navigation = {props.navigation}/> 
                    </View>
                        
                    <Text style={styles.settingstext}>
                      Settings
                    </Text>
            </View>
        );
    }

const styles = StyleSheet.create({
    menu:{
        width: 40,
        height: 40,
        position: "absolute",
        left: "5%",
        top: "15%"  
    },
    
    container: {
        flex: 1,
        alignItems: 'center',
        maxHeight: '100%',
        maxWidth: '100%',
        paddingBottom: 4
    },
    
    settingstext: {
        paddingTop: "6%",
        fontSize: 42
        
    },
})