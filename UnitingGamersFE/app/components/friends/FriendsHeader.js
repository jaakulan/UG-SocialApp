import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import { Text } from 'react-native-elements';
import MenuButton from '../profile/BackInfoComps/MenuButton';

export default function FriendsHeader(props) {

        return (
            <View style={styles.container}>
                    <View style={styles.menu}>
                        <MenuButton navigation = {props.navigation}/>
                    </View>

                    <Text style={styles.settingstext}>
                      Friends
                    </Text>
            </View>
        );
    }


const styles = StyleSheet.create({
    menu:{
        position: "absolute",
        left: "5%",
        top: "20%",
        width:40,
        
    },

    container: {
        flex: 1,
        alignItems: 'center',
        maxHeight: '100%',
        maxWidth: '100%',
        paddingBottom: 4
    },

    settingstext: {
        fontSize: 32,
        top: '30%',
    },


    style:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 2.5,
        borderRadius: 300,
        borderStyle:'solid',
        borderColor: '#8c70ae',
        paddingHorizontal: 10,
        paddingTop: 2,
        paddingBottom: 2
    }
})
