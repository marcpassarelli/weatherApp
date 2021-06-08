import React from "react";
import { Image, StyleSheet } from "react-native";

const IconWeather = ({ icon }) => (
  <Image
    style={styles.imgWeather}
    source={{
      uri: `http://openweathermap.org/img/wn/${icon}.png`,
    }}
  />
);

export default IconWeather;

const styles = StyleSheet.create({
  imgWeather: {
    height: 60,
    width: 60,
  },
});
