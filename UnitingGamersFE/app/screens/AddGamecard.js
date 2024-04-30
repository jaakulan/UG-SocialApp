import React, { useState } from "react";
// import { nameValidator } from '../helpers/nameValidator'
import {
  StyleSheet,
  Picker,
  View,
  Button,
  ScrollView,
  Text,
  Alert,
  TouchableOpacity,
} from "react-native";
import TextInput from "../components/login/TextInput";
import BackButton from "./Back/BackButton";
import axios from "axios";

function AddGamecard(props) {
  const games = ["Overwatch", "Fortnite", "Apex"];
  const gameOptions = games.map((item) => (
    <Picker.Item label={item} value={item} key={item} />
  ));
  const [game, setGame] = useState(games[0]);
  const [gamerTag, setGamerTag] = useState({ value: "", error: "" });
  const [platform, setPlatform] = useState("pc");

  //const user = window.localStorage.getItem("email");
  const user = props.email;

  const addGamecard = async () => {
    if (gamerTag.value === "") {
      setGamerTag({
        value: gamerTag.value,
        error: "Please provide a gamertag.",
      });
      return;
    }
    //regex to match overwatch gamertag
    const overwatchGamerTag = /^[a-z, \d]+[-][0-9]{5}$/i;
    if (game === "Overwatch" && !overwatchGamerTag.test(gamerTag.value)) {
      setGamerTag({
        value: gamerTag.value,
        error:
          "Please provide your Blizzard battletag in the NAME-UNIQUE ID format.",
      });
      return;
    }
    let reqPlat = "";
    if (game === "Apex") {
      switch (platform) {
        case "pc":
          reqPlat = "PC";
        case "xbox":
          reqPlat = "X1";
        case "ps":
          reqPlat = "PS4";
      }
    } else if (game === "Overwatch") {
      switch (platform) {
        case "pc":
          reqPlat = "pc";
        case "xbox":
          reqPlat = "xbl";
        case "ps":
          reqPlat = "psn";
      }
    } else {
      reqPlat = "";
    }

  const body = {
      game: game,
      platform: reqPlat,
      gamertag: gamerTag.value,
      email: user,
    };
    try {
      const gameCard = await axios.post(
        "https://unitinggamers.azurewebsites.net/api/game-card/create-gamecard",
        body
      );
      if (gameCard.status == 200) {
        Alert.alert("Success!", "Successfully added a gamecard :D", [
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]);
        return;
      } else {
        setGamerTag({ value: gamerTag, error: gameCard.data });
        return;
      }
    } catch (e) {
      setGamerTag({
        value: gamerTag,
        error: "Server Error, please try again later.",
      });
      return;
    }
  };

    return (

        <View style={styles.page}>
            {/* Page Container */}
            <View style={styles.container}>

                {/* Header Container */}
                <View style={styles.headerContainer}>

                    {/* Back Button */}
                    <View style={styles.back}>
                        <BackButton navigation={props.navigation} />
                    </View>

                    {/* Title */}
                    <Text style={styles.titleText}>
                        Add a GameCard
                    </Text>
                </View>

                {/* Body Container */}
                <View style={styles.bodyContainer}>

                  <View style={styles.textHeader}>
                    <Text> Choose a game: </Text>
                  </View>

                  <View style={styles.gamePickerContainer}>
                    <Picker
                      selectedValue={game}
                      onValueChange={(itemValue, itemIndex) => setGame(itemValue)}
                      style={styles.picker}
                    >
                      {gameOptions}
                    </Picker>
                  </View>

                  <View style={styles.textHeader}>
                    <Text> Choose a console: </Text>
                  </View>

                  <View style={styles.platformPickerContainer}>

                      <Picker
                          selectedValue={platform}
                          onValueChange={(itemValue, itemIndex) => setPlatform(itemValue)}
                          style={styles.picker}
                      >
                          <Picker.Item label="PC" value="pc" />
                          <Picker.Item label="Xbox" value="xbox" />
                          <Picker.Item label="PlayStation" value="ps" />
                      </Picker>
                  </View>

                  <View style={styles.textHeader}>
                    <Text> Type in your tag: </Text>
                  </View>

                  <View style={styles.gamerTagContainer}>
                      <TextInput
                          label="Gamer tag"
                          returnKeyType="next"
                          value={gamerTag.value}
                          onChangeText={(text) => setGamerTag({ value: text, error: '' })}
                          error={!!gamerTag.error}
                          errorText={gamerTag.error}
                          autoCapitalize="none"
                          style={styles.gamerTag}
                      />
                  </View>

                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={addGamecard}
                        style={styles.button}>
                        <Text style={styles.button_font}>Add Gamecard</Text>
                    </TouchableOpacity>
                  </View>
                </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headerContainer:{
      alignItems: "center",
      backgroundColor: 'white',
      flex:0.15,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },

    bodyContainer:{
      backgroundColor: '#f5f5f5',
      flex:0.85,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8
    },

    page: {
        backgroundColor: 'white',
        height: '100%',
        borderRadius: 15,
        borderColor: '#c9b9da',
        borderWidth: 7,
    },
    container: {
        display: 'flex',
        height: '100%',
        // alignItems: "center",
        justifyContent: 'flex-start',
    },
    gamePickerContainer: {
        marginTop:"10%",
        marginBottom:"10%",
        maxHeight: '10%',
        width: '75%',
        alignSelf: 'center',
        borderColor: '#696969',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,

    },
    platformPickerContainer: {
        marginTop:"10%",
        marginBottom:"10%",
        maxHeight: '10%',
        width: '75%',
        alignSelf: 'center',
        borderColor: '#696969',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    gamerTagContainer: {
        marginTop:"5%",
        marginBottom:"10%",
        height: '10%',
        width: '75%',
        alignSelf: 'center',
    },
    buttonContainer: {
        height: '10%',
        marginTop: "5%",
        marginBottom: "5%",
        marginLeft: "10%",
        marginRight: "10%",
    },
    button: {

      backgroundColor: '#f9f3fd',
      borderWidth: 7,
      borderStyle:'solid',
      borderColor: '#c9b9da',
      borderRadius: 25,
      maxHeight: "200%",
      minHeight: "12%",
      justifyContent: 'center',
      alignItems: 'center'
    },

    button_font:{
      fontSize:26,
      flexDirection: 'column',
      textAlign: 'center',

    },

    picker: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',

    },
    gamerTag: {
        alignSelf: 'center',
        width: '100%',
        backgroundColor: 'white',
    },
    back: {
      width: 48,
      height: 48,
      left: "2%",
      top: "15%",
      position: "absolute",
    },

    textHeader:{
      marginLeft:"5%",
      marginBottom:"-5%",
      marginTop:"5%"
    },

    titleText: {
      fontSize: 34,
      color: "black",
      paddingTop:"7%"

    },
})

export default AddGamecard;
