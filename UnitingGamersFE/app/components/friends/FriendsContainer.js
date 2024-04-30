import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, View, Image} from 'react-native'
import { Text } from 'react-native-elements';
import profilepic from '../../assets/profile-pictures/profile2.jpg'
import UGHandleMenu from './UGHandleMenu'

function FriendsContainer(props){
        return (
            <View style={styles.container}>
              <View>
                  <Image source={props.profilepic} style={styles.profilepic}></Image>
              </View>

              <View style={styles.col}>

                <View>
                  <Text  style={styles.name}>{props.name}</Text>
                </View>

                <View style={styles.UGHandle}>
                  <UGHandleMenu username={props.username}/>
                </View>


              </View>

            </View>
        );
    }

const styles = StyleSheet.create({
  UGHandle:{
    minHeight: "10%",

  },

  col:{
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',

  },
  name:{
    fontSize: 20,
    color: "#453875"

  },
    profilepic:{
      marginLeft: 15,
      height: 60,
      width: 60,
      top: "2%",
      borderRadius: 500,
      borderColor: '#bc9cc3',
      borderWidth: 4,
    },

    container: {
        alignItems: 'center',
        flexDirection: 'row',
        maxHeight: '90%',
        minHeight: '90%',
        minWidth: '98%',
        maxWidth: '98%',
        paddingBottom: 4,
        borderWidth: 2.5,
        borderRadius: 30,
        borderColor: '#bc9cc3',
        backgroundColor: 'white',

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

export default FriendsContainer;
