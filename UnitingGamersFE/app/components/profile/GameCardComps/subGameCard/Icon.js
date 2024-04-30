import { Dimensions, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
let logoSize = width/5.5

export default class Icon extends React.Component{

    render(){

        return (
        <View style={styles.container}>
            <View style={styles.imgOutline}>
                <Image source={this.props.imgSrc} style={styles.image}></Image>
            </View>
        </View>
    );}
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: logoSize,
        height: logoSize,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    imgOutline:{
        padding: 12,
        borderWidth: 3,
        borderRadius: 400,
        borderColor: '#8e73af',
        borderStyle: 'solid',
        backgroundColor: 'white',
    }

})