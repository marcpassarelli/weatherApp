import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { format } from "date-fns";

import styles from "./styles";
import RainPrecipitation from "../RainPrecipitation";
import IconWeather from "../IconWeather";

const NextHoursForecast = ({ weatherInfo, timezoneOffset }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.containerScrollView}
      >
        {weatherInfo.map((hour) => {
          const date = new Date(hour.dt * 1000);
          const localTime = date.getTime();
          const localOffset = date.getTimezoneOffset() * 60000;
          const utcTime = localTime + localOffset;
          const timeInTimeZone = utcTime + 1000 * timezoneOffset;

          return (
            <View style={styles.cardHour} key={hour.dt}>
              <Text style={styles.textHour}>
                {format(new Date(timeInTimeZone), "hh:mm aaa")}
              </Text>
              <IconWeather icon={hour.weather[0].icon} />
              <Text style={styles.textTemperature}>
                {Math.round(hour.temp)}º
              </Text>
              <RainPrecipitation
                percentage={
                  hour.pop
                    ? (hour.pop * 100).toFixed(0) + "%"
                    : hour.rain
                    ? hour.rain["1h"] + "mm"
                    : "no info"
                }
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default NextHoursForecast;
