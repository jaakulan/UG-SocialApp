// import React, {useState, useRef} from 'react'
import * as React from 'react'
import { render } from 'react-dom';
import { StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import { Text, SearchBar, } from 'react-native-elements';
import FriendsContainer from "./FriendsContainer";
// import alexPicture from '../../assets/profile-pictures/profile2.jpg'
import nadaPicture from '../../assets/profile-pictures/profile3.png'
import axios from 'axios';

const windowWidth = Dimensions.get('window').width;

// const data = [ // replace this with fetch from db <- thanks nada good idea so I can see my stuff
//     {
//         name: "Alexanda Thompson",
//         username: "cool2beAlex",
//         profilepic: alexPicture
//     },
//     {
//         name: "Nada Da Police",
//         username: "messYouUp20",
//         profilepic: nadaPicture
//     },

// ];

var friend = [];
function FriendsBody(props) {
  let friendEmails = []
  let image = ''
  let username = ''
  let name = ''
  let response = []
  let currEmail = ""
  let friendInfo = {}

  const [friend, setFriend] = React.useState([]);
  const params = {
    email: props.email, // user's email
    userUsername: props.username // user's username
  };


  const URLFriends = 'https://unitinggamers.azurewebsites.net/api/friends/friend/' // api to get friends of the user
  const URLUsernameToImage = 'https://unitinggamers.azurewebsites.net/api/images/' // api to get UG profile picture for each friend
  const URLEmailToUsername = 'https://unitinggamers.azurewebsites.net/api/user/username/' // api to get UG username for each friend
  const URLEmailToName = 'https://unitinggamers.azurewebsites.net/api/user/name/' // api to get UG name for each friend

  const getFriend = React.useCallback(async () => {
    try {
      friendEmails = await axios.get(URLFriends + params.email).catch(err => console.log("step 1 " + err)); // get emails of all user's friends
      friendEmails = friendEmails.data;
        for (const friendEmail in friendEmails) { // loop through each friend
          currEmail = friendEmails[friendEmail].friendTwoEmail;
          friendInfo = {};
          username = await axios.get(URLEmailToUsername + currEmail).catch(err => console.log("step 2 " + err)); // get friend's UG username
          username = username.data;
          username = username[0].username

          name = await axios.get(URLEmailToName + currEmail).catch(err => console.log(err)); // get friend's UG name
          name = name.data;
          name = name[0].name
          image = nadaPicture; // placeholder

          friendInfo.profilepic = image;
          friendInfo.username = username;
          friendInfo.name = name;
          response.push(friendInfo);
        }
      setFriend(response); // set friend for use outside function
      console.log(friend); // TEMP - this shows that we now have the format we want
    }
    catch (err) {
      console.log(err)
      console.log("no friends found")
    }
  }, [])

  React.useEffect(() => {
    getFriend();
  }, []);

  const friends = friend.map(item =>
    <View style={styles.friend} key={item.username} >
      <FriendsContainer name={item.name} profilepic={item.profilepic} username={item.username} key={item.username} />
    </View>
  );

  return (
    <View style={styles.container}>

      {/* <SearchBar iconStyle={{color: 'black'}} containerStyle={styles.searchBar} inputContainerStyle={styles.innerSearch} placeholder = "type here..." onChangeText={changeSearch} value={search}/> */}

      <View style={styles.friendscontainer}>
        {friends}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    maxHeight: '100%',
    maxWidth: '100%',
    flexDirection: 'column',
    paddingBottom: 4
  },
  friendscontainer: {
    maxHeight: '90%',
    maxWidth: '100%',
    flexDirection: 'column',
    marginTop: "10%",
    backgroundColor: '#f5f5f5',
  },
  friend: {
    flex: 0.5,
    minHeight: windowWidth / 3.5,
    height: "20%",
    maxHeight: "20%"


  },
  searchBar: {
    flex: 0,
    backgroundColor: '#f5f5f5',
    borderBottomColor: '#f5f5f5',
    borderTopColor: '#f5f5f5',
    width: "100%",
    height: "2%"
  },
  innerSearch: {
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: '#bcacd4',
    borderWidth: 2
  },

  style: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2.5,
    borderRadius: 300,
    borderStyle: 'solid',
    borderColor: '#8c70ae',
    paddingHorizontal: 10,

  }
})
export default FriendsBody;