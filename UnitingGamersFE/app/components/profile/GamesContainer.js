import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Animated,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import gameIcons from "../../assets/game-icons/gamesIcons";
import { SearchBar } from "react-native-elements";
import GameCard from "./GameCardComps/GameCard";
import axios from "axios";

const windowWidth = Dimensions.get("window").width;

export default function GamesContainer(props) {
  const [search, changeSearch] = useState("");
  const [gameCards, setGameCards] = useState({ cards: [], error: null });
  const user = props.email;
  let gamecards = [];
  const getGameCards = async () => {
    try {
      let response = await axios
        .get(
          "https://unitinggamers.azurewebsites.net/api/game-card/get-gamecards/" +
            user
        )
        .catch((err) => console.log(err));
      if (response.status === 200) {
        let data = response.data;
        let x = 0;
        for (const card of data) {
          let singleCard = {};
          singleCard.game = card.game;
          singleCard.username = card.username;
          singleCard.platform = card.platform;
          singleCard.gameImage = gameIcons.empty;
          singleCard.i = x;
          x += 1;

          gamecards.push(singleCard);
        }
        console.log("gamecards is ..........................");
        console.log(gamecards);
        setGameCards({ cards: gamecards, error: null });
      } else {
        setGameCards({
          cards: [],
          error:
            "You dont have any games! You can add some from the settings page",
        });
      }
    } catch (err) {
      setGameCards({
        cards: [],
        error: "Server Error, please try again later",
      });
      return;
    }
  };

  useEffect(() => {
    getGameCards();
  }, []);

  console.log("idk y tf this is not working............................");
  gameCards.cards.map((item) => console.log(item));

  const cards = gameCards.cards.map((rencard) => (
    <GameCard
      gameName={rencard.game}
      userName={rencard.username}
      platform={rencard.platform}
      gameImage={gameIcons.empty}
      key={rencard.i}
    />
  ));

  console.log("This is siiuu");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Games</Text>
        </View>
        <View style={styles.search}>
          <SearchBar
            iconStyle={{ color: "black" }}
            containerStyle={styles.searchBar}
            inputContainerStyle={styles.innerSearch}
            placeholder="Type Here..."
            onChangeText={changeSearch}
            value={search}
          />
        </View>
      </View>
      <View style={styles.games}>
        <ScrollView
          showsHorizontalScrollIndicator={true}
          horizontal={true}
          style={styles.cardScroll}
        >
          {gameCards.error && <Text> {gameCards.error} </Text>}
          {gameCards.cards != [] && cards}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  title: {
    flex: 1.5,
  },
  titleText: {
    marginTop: 5,
    fontSize: 25,
    textAlign: "center",
    marginLeft: 5,
  },
  search: {
    flex: 4,
    height: "30%",
    marginTop: "-7%",
  },
  cardScroll: {},
  games: {
    alignItems: "center",
    flex: 7.5,
    display: "flex",
    flexDirection: "column",
    paddingTop: "1%",
    paddingBottom: 10,
  },
  searchBar: {
    backgroundColor: "#f9f3fd",
    borderBottomColor: "#f9f3fd",
    borderTopColor: "#f9f3fd",
  },
  innerSearch: {
    backgroundColor: "white",
    borderRadius: 30,
    borderColor: "#bcacd4",
    borderWidth: 1,
  },
  gap: {
    padding: 10,
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 15,
    paddingTop: 15,
    width: windowWidth * 1.8,
  },
});
