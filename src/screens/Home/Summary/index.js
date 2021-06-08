import React from "react";
import { Image, Text, View } from "react-native";
import IconWeather from "../../../components/IconWeather";
import Flag from "react-native-flags";

import styles from "./styles";

const Summary = ({ weatherInfoCurrent, weatherInfoDay }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.cityName}>
            {weatherInfoCurrent.name} - {weatherInfoCurrent.sys.country}
          </Text>
          <Flag size={32} code={weatherInfoCurrent.sys.country} />
        </View>
        <View style={styles.containerWeatherInfo}>
          <View style={styles.leftInfo}>
            <Text style={styles.textCurrentTemperature}>
              {Math.round(weatherInfoCurrent.main.temp)}º
            </Text>
            <IconWeather icon={weatherInfoCurrent.weather[0].icon} />
          </View>
          <View style={styles.rightInfo}>
            <Text style={styles.textRightInfo}>
              {Math.round(weatherInfoDay.temp.max)}º /{" "}
              {Math.round(weatherInfoDay.temp.min)}º
            </Text>
            <Text style={styles.textRightInfo}>
              feels like: {Math.round(weatherInfoCurrent.main.feels_like)}º
            </Text>
            <Text style={styles.textRightInfo}>
              {weatherInfoCurrent.weather[0].description}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default Summary;
