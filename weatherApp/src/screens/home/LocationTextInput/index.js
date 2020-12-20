import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const LocationTextInput = () => (
  <View style={styles.container}>
    <TextInput style={styles.textInput} placeholder="Type a location..." />
    <TouchableOpacity style={styles.containerIcon}>
      <Icon name="magnify" size={45} color="#472c82" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default LocationTextInput;
