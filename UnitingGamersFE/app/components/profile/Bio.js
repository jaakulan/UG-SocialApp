import React, {useEffect, useState, useCallback} from 'react'
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native'


const dummy = "Just a fun loving cool cat gamer from Toronto. \
Wait a second - I'm a cat. How did I learn to play video games?";

// const dummy2 = "My name is Jack Harlow and Thomas loves me! hehehehehehe trying to get to 150 chars.";

// if (dummy === "") {
//     dummy = "Hi, I'm a Gamer"
// }



function Bio(props) {
    let [description, setDescription] = useState(null);
    const email = props.email
     
    const URL = 'https://unitinggamers.azurewebsites.net/api/descriptions/description/'

    const getDescription = useCallback(async () => {
        let response = ""
        try {
            response = await axios.get(URL+email)
            response = response.data.description
        }
        catch(err){
            response = "Hey let's play some games! I'm definetly one of the best around so you better watch out! Bing Bong!"
        }
        
        setDescription(response)
      }, [])

    useEffect(() => {
         getDescription()
      }, []);

    

    return (
        <View>
            {description && <Text style={styles.bioText}>{description}</Text>}
        </View>
    );
}


const styles = StyleSheet.create({
    bioText: {
        color: '#633e91',
        textAlign: 'center',
        fontSize: 18,
    }

})

export default Bio;
