import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { format, fromUnixTime } from 'date-fns'

import styles from './styles'

const SevenDaysForecast = ({ weatherInfo }) => {
  return (
    <View style={styles.container}>
      {weatherInfo.map((day, index) => {
        return (
          <View style={styles.cardDay} key={day.dt}>
            <View style={styles.containerDay}>
              <Text style={styles.textDayWeek}>
                {index === 0
                  ? 'Today'
                  : format(fromUnixTime(new Date(day.dt)), 'EEEE')}
              </Text>
            </View>
            <View style={styles.containerIcon}>
              <Image
                style={{ height: 60, width: 60 }}
                source={{
                  uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}.png`,
                }}
              />
            </View>
            <View style={styles.containerTemperature}>
              <Text style={styles.textTemperature}>
                {Math.round(day.temp.max)}º / {Math.round(day.temp.min)}º
              </Text>
            </View>
            <View style={styles.containerPrecipitation}>
              <Icon name='weather-rainy' size={25} color='#2BBDCC' />
              <Text style={styles.textPrecipitation}>
                {(day.pop * 100).toFixed(0)}%
              </Text>
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default SevenDaysForecast
