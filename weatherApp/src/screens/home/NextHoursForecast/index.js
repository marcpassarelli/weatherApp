import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { fromUnixTime, format } from 'date-fns'

import styles from './styles'

// clear, clouds, thunderstorm, rain, drizzle, snow

const NextHoursForecast = ({ weatherInfo }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.containerScrollView}
      >
        {weatherInfo.map((hour) => {
          return (
            <View style={styles.cardHour} key={hour.dt}>
              <Text style={styles.textHour}>
                {format(fromUnixTime(new Date(hour.dt)), 'hh:mm aaa')}
              </Text>
              <Image
                style={{ height: 60, width: 60 }}
                source={{
                  uri: `http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`,
                }}
              />
              <Text style={styles.textTemperature}>
                {Math.round(hour.temp)}º
              </Text>
              <View style={styles.containerPrecipitation}>
                <Icon name='weather-rainy' size={25} color='#2BBDCC' />
                <Text style={styles.textPrecipitation}>
                  {(hour.pop * 100).toFixed(0)}%
                </Text>
              </View>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default NextHoursForecast
