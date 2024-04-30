import { Dimensions, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
let logoSize = width/5.5

export default function CardText(props){

        return (
        <View style={styles.text}>
            <Text style={styles.heading}>{props.heading}</Text>
            <View style={styles.spacing}></View>
            <Text style={styles.answer}>{props.answer}</Text>
        </View>
    );}


const styles = StyleSheet.create({
    heading:{
        fontSize: width/30,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    answer:{
        fontSize: width/30,
    },
    text:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 5
    },
    spacing:{
        padding: 2
    }
})