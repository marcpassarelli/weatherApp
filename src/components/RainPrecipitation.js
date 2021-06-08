import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const RainPrecipitation = ({ percentage }) => (
  <View style={styles.containerPrecipitation}>
    <Icon name="weather-rainy" size={25} color="#2BBDCC" />
    <Text style={styles.textPrecipitation}>{percentage}</Text>
  </View>
);

export default RainPrecipitation;

const styles = StyleSheet.create({
  containerPrecipitation: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textPrecipitation: {
    marginLeft: 5,
  },
});
