import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TabBarIOSItem,
} from "react-native";
import React, { useState, useEffect } from "react";
import gameIcons from "../../../assets/game-icons/gamesIcons";
import { color } from "react-native-elements/dist/helpers";
import Icon from "./subGameCard/Icon";
import CardText from "./subGameCard/CardText";
import GamerTag from "./subGameCard/GamerTag";
import axios from "axios";

//imgSrc={gameIcons.overwatch}
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
let logoSize = width / 5.5;
let imageTopPadding = height / 65;
let imageLeftPadding = width / 25;

export default function GameCard(props) {
  // need useEffect and get the stats for the game
  const [stat1, setStat1] = useState({ heading: null, answer: null });
  const [stat2, setStat2] = useState({ heading: null, answer: null });
  const [stat3, setStat3] = useState({ heading: null, answer: null });
  const [error, setError] = useState(null);

  const getGameStats = async () => {
    try {
      switch (props.gameName) {
        case "fortnite":
          let response1 = await axios.get(
            "https://unitinggamers.azurewebsites.net/api/game-stats/" +
              "fortnite/" +
              props.userName
          );
          console.log("fortnite");
          console.log(response1.data);
          if (response1.status === 200) {
            setStat1({ heading: "Wins", answer: response1.data.wins });
            setStat2({ heading: "Kdr", answer: response1.data.kdr });
            setStat3({ heading: "Kills", answer: response1.data.kills });
            break;
          } else {
            setError("Couldn't get stats");
            break;
          }
        case "overwatch":
          let response2 = await axios.get(
            "https://unitinggamers.azurewebsites.net/api/game-stats/" +
              "overwatch/" +
              props.userName +
              "/" +
              props.platform
          );
          if (response2.status === 200) {
            setStat1({ heading: "Level", answer: response2.data.level });
            setStat2({ heading: "Hero", answer: response2.data.hero });
            setStat3({ heading: "Wins", answer: response2.data.wins });
            break;
          } else {
            setError("Couldn't get stats");
            break;
          }

        case "apex":
          let response3 = await axios.get(
            "https://unitinggamers.azurewebsites.net/api/game-stats/" +
              "apex/" +
              props.userName +
              "/" +
              props.platform
          );
          if (response3.status === 200) {
            setStat1({ heading: "Level", answer: response3.data.level });
            setStat2({ heading: "Legend", answer: response3.data.legend });
            setStat3({ heading: "Rank", answer: response3.data.rank });
            break;
          } else {
            setError("Couldn't get stats");
            break;
          }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getGameStats();
  }, []);

  return (
    <View style={styles.container}>
      <View styles={styles.icon}>
        <Icon imgSrc={props.gameImage}></Icon>
      </View>

      <View style={styles.title}>
        <Text style={styles.gameTitle}>{props.gameName}</Text>
      </View>
      <View style={styles.gameInfo}>
        {error && <Text>{error} </Text>}
        {!error && <CardText heading={stat1.heading} answer={stat1.answer}></CardText>}
        {!error && <CardText heading={stat2.heading} answer={stat2.answer}></CardText>}
        {!error && <CardText heading={stat3.heading} answer={stat3.answer}></CardText>}
      </View>
      <View style={styles.gamerTags}>
        <GamerTag userName={props.userName}></GamerTag>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#8c70ae",
    borderRadius: width / 30,
    backgroundColor: "rgba(200, 155, 255, 0.22)",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    margin: 7
  },
  title: {
    flex: 1,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  gameTitle: {
    fontSize: width / 25,
    fontWeight: "bold",
  },
  icon: {
    flex: 4,
  },
  gameInfo: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  gamerTags: {
    flex: 1.5,
  },
});
