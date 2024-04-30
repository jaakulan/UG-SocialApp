import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import location_icon from "./BackAssets/location.png";
import axios from "axios";

let windowWidth = Dimensions.get("window").width;

export default function LocationTag(props) {
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  //let user = window.localStorage.getItem("email");
  let user = props.email;
  //let currLocation = window.localStorage.getItem("location");
  let currLocation = 'dummy';

  const getLocation = async () => {
    try {
      let response = await axios.get(
        "https://unitinggamers.azurewebsites.net/api/location/" + user
      );
      console.log(response.data);
      if (response.status == 200) {
        let reslocation = response.data.location;
        if (!currLocation) {
          setLocation(reslocation);
          //window.localStorage.setItem("location", reslocation);
          return;
        } else {
          if (currLocation != reslocation) {
            setLocation(reslocation);
            //window.localStorage.setItem("location", reslocation);
            return;
          }
          return;
        }
      } else {
        console.log(response.status);
        setError(response.data);
      }
    } catch (err) {
      console.log(err);
      setError("Server Error, please try again later.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.locationBox}>
      <Image source={location_icon} style={styles.icon}></Image>
      <Text style={styles.location}>{location && location }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  locationBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: windowWidth / 12,
    width: windowWidth / 12,
  },
  location: {
    fontSize: windowWidth / 18,
    color: "purple",
  },
});
