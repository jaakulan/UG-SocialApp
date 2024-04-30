import { Dimensions, StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
let logoSize = width/5.5
let imageTopPadding = height/65
let imageLeftPadding = width/25

export default class Icon extends React.Component{

    render(){

        return (
        <View style={styles.container}>
            <Image source={this.props.imgSrc} style={styles.image}></Image>
        </View>
    );}
}

const styles = StyleSheet.create({
    container:{
        paddingTop: imageTopPadding, 
        flex: 5,
        borderWidth: 2.5,
        borderStyle:'solid',
        borderColor: '#8c70ae',
        borderRadius: width/3,
        paddingLeft: imageLeftPadding,
        paddingRight: 10
    },
    image:{
        width: logoSize,
        height: logoSize
    }

})