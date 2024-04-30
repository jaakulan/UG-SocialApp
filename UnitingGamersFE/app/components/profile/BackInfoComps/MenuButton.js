import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import menu from './BackAssets/menu.png'


export default function MenuButton(props){ 
    const onPressHandler = () => {
    // navigation.navigate('Screen_B');
      props.navigation.toggleDrawer();
    }
    return (
    <TouchableOpacity style={styles.touchable} onPress={onPressHandler}>
        <Image source={menu} style={styles.image} />
    </TouchableOpacity>
);}


const styles = StyleSheet.create({
      image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
      },
      touchable: {
        alignItems: 'center',
        justifyContent: 'center'
      },
})