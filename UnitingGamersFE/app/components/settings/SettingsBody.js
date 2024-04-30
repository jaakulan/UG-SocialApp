import React from 'react'
import { render } from 'react-dom';
import { StyleSheet, View, Image, TouchableOpacity, } from 'react-native'
import { Text} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


export default function SettingsBody(props){
      const navigation = useNavigation();
        return (
          
              <View style={styles.container}>
                <View style={styles.button_container}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('addGamecard')}
                    style={styles.button}>
                    <Text style={styles.button_font} >Add a Game</Text>
                  </TouchableOpacity>
                </View>
                
                
                <View style={styles.button_container}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('changeProfilePicture')}
                    style={styles.button}>
                    <Text style={styles.button_font}>Change Profile Picture</Text>
                  </TouchableOpacity>
                </View>
                
                <View style={styles.button_container}>
                  <TouchableOpacity
                    style={styles.buttonNotActive}>
                    <Text style={styles.button_font}>Reorder Gamecards</Text>
                  </TouchableOpacity>
                </View>
                
                
                <View style={styles.button_container_bottom}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('Login')}
                    style={styles.buttonDelete}>
                    <Text style={styles.button_font}>Delete Account</Text>
                  </TouchableOpacity>
                </View>

              </View>

            
        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        maxHeight: '100%',
        maxWidth: '100%',
        flexDirection: 'column',
        paddingBottom: 4
    },
    
    button_container: {
      marginTop: 10,
      width: "95%"
    
    },
    
    button_container_bottom: {
      marginTop: "80%",
      width: "95%",
      flexDirection: 'column',
      alignContent: "flex-end"
    
    },
    
    button:{
      backgroundColor: 'white',
      borderWidth: 5,
      borderStyle:'solid',
      borderColor: '#c9b9da',
      borderRadius: 15,
      maxHeight: "300%",
      minHeight: "11%",
      justifyContent: 'center'   
    },
    
    buttonDelete:{
      backgroundColor: '#ffbbbb',
      borderWidth: 5,
      borderStyle:'solid',
      borderColor: '#bb0000',
      borderRadius: 15,
      maxHeight: "300%",
      minHeight: "11%",
      justifyContent: 'center'   
    },
    
    buttonNotActive:{
      backgroundColor: 'lightgrey',
      borderWidth: 5,
      borderStyle:'solid',
      borderColor: 'darkgrey',
      borderRadius: 15,
      maxHeight: "300%",
      minHeight: "11%",
      justifyContent: 'center'   
    },
    
    button_font:{
      fontSize:22,
      flexDirection: 'column',
      textAlign: 'center',
      
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