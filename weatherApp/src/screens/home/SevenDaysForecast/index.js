import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

const days = [
  {
    dayOfTheWeek: 'Yesterday',
    dayOfTheMonth: '22/12',
    icon: '01d',
    minimum: 28,
    maximum: 37,
    pop: 0.2,
  },
  {
    dayOfTheWeek: 'Today',
    dayOfTheMonth: '23/12',
    icon: '01d',
    minimum: 28,
    maximum: 37,
    pop: 0.2,
  },
  {
    dayOfTheWeek: 'Thursday',
    dayOfTheMonth: '23/12',
    icon: '01d',
    minimum: 28,
    maximum: 37,
    pop: 0.2,
  },
  {
    dayOfTheWeek: 'Friday',
    dayOfTheMonth: '23/12',
    icon: '13n',
    minimum: 28,
    maximum: 37,
    pop: 0.2,
  },
  {
    dayOfTheWeek: 'Saturday',
    dayOfTheMonth: '23/12',
    icon: '09d',
    minimum: 28,
    maximum: 37,
    pop: 0.2,
  },
  {
    dayOfTheWeek: 'Sunday',
    dayOfTheMonth: '23/12',
    icon: '02d',
    minimum: 28,
    maximum: 37,
    pop: 0.2,
  },
  {
    dayOfTheWeek: 'Monday',
    dayOfTheMonth: '23/12',
    icon: '10n',
    minimum: 28,
    maximum: 37,
    pop: 0.2,
  },
]

const SevenDaysForecast = () => {
  return (
    <View style={styles.container}>
      {days.map((day) => {
        return (
          <View style={styles.cardDay} key={day.dayOfTheWeek}>
            <View style={styles.containerDay}>
              <Text style={styles.textDayWeek}>{day.dayOfTheWeek}</Text>
            </View>
            <View style={styles.containerIcon}>
              <Image
                style={{ height: 60, width: 60 }}
                source={{
                  uri: `http://openweathermap.org/img/wn/${day.icon}.png`,
                }}
              />
            </View>
            <View style={styles.containerTemperature}>
              <Text style={styles.textTemperature}>
                {day.maximum}º / {day.minimum}º
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
