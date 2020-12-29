import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const Summary = ({ weatherInfo }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftInfo}>
        <Text style={styles.textCurrentTemperature}>
          {Math.round(weatherInfo.main.temp)}º
        </Text>
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            uri: `http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}.png`,
          }}
        />
      </View>
      <View style={styles.rightInfo}>
        <Text style={styles.textRightInfo}>
          {Math.round(weatherInfo.main.temp_max)}º /{' '}
          {Math.round(weatherInfo.main.temp_min)}º
        </Text>
        <Text style={styles.textRightInfo}>
          Feels like: {Math.round(weatherInfo.main.feels_like)}º
        </Text>
        <Text style={styles.textRightInfo}>
          {weatherInfo.weather[0].description}
        </Text>
      </View>
    </View>
  )
}
export default Summary
