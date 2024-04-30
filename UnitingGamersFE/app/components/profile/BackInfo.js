import React from 'react'
import { render } from 'react-dom';
import { ImageBackground, StyleSheet, View, Image, Dimensions, Button } from 'react-native'

import { Text } from 'react-native-elements';
import FriendsButton from './BackInfoComps/FriendsButton'
import MenuButton from './BackInfoComps/MenuButton'
import UGHandle from './BackInfoComps/BackAssets/UGHandle';
import LocationTag from './BackInfoComps/LocationTag';
import empty from '../../assets/game-icons/empty.png'
import dp from '../../assets/profile-pictures/profile2.jpg'
import dpBack from '../../assets/profile-pictures/background.jpeg'

let windowWidth = Dimensions.get('window').width
let windowHeight = Dimensions.get('window').height


export default function BackInfo(props) {
        return (
            <View style={styles.container}>
                <ImageBackground source={dpBack} style={styles.background}>
                    <View style={styles.friendButtons}>
                        <View style={styles.menu}>
                            <MenuButton navigation={props.navigation}/>
                        </View>
                        <View style={styles.friends}>
                            <FriendsButton />
                        </View>
                    </View>
                    <View style={styles.dpView}>
                        <Image source={dp} style={styles.dp}></Image>
                    </View>
                </ImageBackground>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.name}>Peter Parker</Text>
                    </View>
                    <View style={styles.headerGap}></View>
                    <View style={styles.locationcontainer}>
                        <LocationTag username={props.username} email={props.email} ></LocationTag>
                    </View>
                    <View style={styles.headerGap}></View>
                    <View style={styles.ug_tag}>
                        <UGHandle UGIcon={empty} UGHandle={'therealspiderman'}></UGHandle>
                    </View>

                </View>
            </View>
        );
}

const styles = StyleSheet.create({
    container:{
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',

    },
    locationcontainer:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    header: {
        flex: 0.8,
        alignItems: 'center',
        marginTop: windowHeight/18
    },
    headerGap:{
        padding:'1%'
    },
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    backdrop: {
        height: windowHeight/3,
        maxWidth:"100%",
    },
    dpView:{
        paddingTop: windowHeight/35,
        height: windowHeight/4,
        width: windowHeight/4,
    },
    dp:{

        height: windowHeight/4,
        width: windowHeight/4,
        borderRadius: 500,
        borderColor: '#bc9cc3',
        borderWidth: 4,
    },
    ug_tag:{
        flex: 3
    },
    locationcontainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    name:{
        fontSize:windowWidth/10,
    },
    friendButtons:{
        display:'flex',
        flexDirection: 'row',
        width: windowWidth,
        justifyContent: 'space-between',
        paddingLeft: '7%',
        paddingRight: '7%',
        paddingTop: '10%'
    },
    menu:{
        width: 40,
        height: 40
    },
    friends:{
        width: 40,
        height: 40
    }

})
