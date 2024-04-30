import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
    // return <Image source={require('../../assets/login-icons/my-gilley.png')} style={styles.image} />
    return <Image source={require('../../assets/login-icons/my-gilley.gif')} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 250,
        marginBottom: 8,
    },
})