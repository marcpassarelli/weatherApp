import React from "react";
import { Text, View } from "react-native";

import { format, fromUnixTime } from "date-fns";

import styles from "./styles";
import RainPrecipitation from "../../../components/RainPrecipitation";
import IconWeather from "../../../components/IconWeather";

const SevenDaysForecast = ({ weatherInfo }) => {
  return (
    <View style={styles.container}>
      {weatherInfo.map((day, index) => {
        return (
          <View style={styles.cardDay} key={day.dt}>
            <View style={styles.containerDay}>
              <Text style={styles.textDayWeek}>
                {index === 0
                  ? "Today"
                  : format(fromUnixTime(new Date(day.dt)), "EEEE")}
              </Text>
            </View>
            <View style={styles.containerIcon}>
              <IconWeather icon={day.weather[0].icon} />
            </View>
            <View style={styles.containerTemperature}>
              <Text style={styles.textTemperature}>
                {Math.round(day.temp.max)}º / {Math.round(day.temp.min)}º
              </Text>
            </View>
            <View style={{ width: "25%" }}>
              <RainPrecipitation
                percentage={(day.pop * 100).toFixed(0) + "%"}
              />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SevenDaysForecast;
