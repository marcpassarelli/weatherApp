import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import LocationTextInput from "./LocationTextInput";

import styles from "./styles";

const Home = () => {
  const [isThereALocation, setIsThereALocation] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <LocationTextInput />
      {isThereALocation ? (
        <Text>Temperature here</Text>
      ) : (
        <Text style={styles.textInsertLocation}>
          Search for a location to see its forecast
        </Text>
      )}
    </SafeAreaView>
  );
};

export default Home;
