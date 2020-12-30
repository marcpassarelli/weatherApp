import React from 'react'
import { Image, Text, View } from 'react-native'

import styles from './styles'

const Summary = ({ weatherInfoCurrent, weatherInfoDay }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftInfo}>
        <Text style={styles.textCurrentTemperature}>
          {Math.round(weatherInfoCurrent.main.temp)}º
        </Text>
        <Image
          style={{ height: 60, width: 60 }}
          source={{
            uri: `http://openweathermap.org/img/wn/${weatherInfoCurrent.weather[0].icon}.png`,
          }}
        />
      </View>
      <View style={styles.rightInfo}>
        <Text style={styles.textRightInfo}>
          {Math.round(weatherInfoDay.temp.max)}º /{' '}
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
  )
}
export default Summary
