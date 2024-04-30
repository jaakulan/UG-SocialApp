import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import back from '../../assets/login-icons/arrow_back.png'


export default function BackButton(props) {
  const onPressHandler = () => {
    // navigation.navigate('Screen_B');
    props.navigation.navigate('Drawer');
  }
  return (
    <TouchableOpacity style={styles.touchable} onPress={onPressHandler}>
      <Image source={back} style={styles.image} />
    </TouchableOpacity>
  );
}


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