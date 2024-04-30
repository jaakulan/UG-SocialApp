import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import glass from './BackAssets/glass.png'

export default function FriendsButton(){
    return (
    <TouchableOpacity style={styles.touchable}>
        <Image source={glass} style={styles.image} />
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