import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

// clear, clouds, thunderstorm, rain, drizzle, snow
const hourly = [
  {
    hour: '17:00',
    temperature: 35,
    description: 'Clear',
    pop: 0.1,
    icon: '01d',
  },
  {
    hour: '18:00',
    temperature: 34,
    description: 'Clear',
    pop: 0.15,
    icon: '01d',
  },
  {
    hour: '19:00',
    temperature: 33,
    description: 'Clear',
    pop: 0.2,
    icon: '01d',
  },
  {
    hour: '20:00',
    temperature: 32,
    description: 'Clear',
    pop: 0.25,
    icon: '01d',
  },
  {
    hour: '21:00',
    temperature: 31,
    description: 'Clouds',
    pop: 0.3,
    icon: '01d',
  },
  {
    hour: '22:00',
    temperature: 30,
    description: 'Clouds',
    pop: 0.35,
    icon: '01d',
  },
  {
    hour: '23:00',
    temperature: 29,
    description: 'Clouds',
    pop: 0.4,
    icon: '01d',
  },
  {
    hour: '00:00',
    temperature: 28,
    description: 'Clouds',
    pop: 0.45,
    icon: '01d',
  },
  {
    hour: '01:00',
    temperature: 27,
    description: 'Thunderstorm',
    pop: 0.5,
    icon: '01d',
  },
  {
    hour: '02:00',
    temperature: 26,
    description: 'Thunderstorm',
    pop: 0.55,
    icon: '01d',
  },
  {
    hour: '03:00',
    temperature: 25,
    description: 'Thunderstorm',
    pop: 0.6,
    icon: '01d',
  },
  {
    hour: '04:00',
    temperature: 24,
    description: 'Thunderstorm',
    pop: 0.65,
    icon: '01d',
  },
  {
    hour: '05:00',
    temperature: 23,
    description: 'Rain',
    pop: 0.7,
    icon: '01d',
  },
  {
    hour: '06:00',
    temperature: 22,
    description: 'Rain',
    pop: 0.75,
    icon: '01d',
  },
  {
    hour: '07:00',
    temperature: 21,
    description: 'Rain',
    pop: 0.8,
    icon: '01d',
  },
  {
    hour: '08:00',
    temperature: 20,
    description: 'Rain',
    pop: 0.85,
    icon: '01d',
  },
  {
    hour: '09:00',
    temperature: 19,
    description: 'Haze',
    pop: 0.9,
    icon: '01d',
  },
  {
    hour: '10:00',
    temperature: 18,
    description: 'Haze',
    pop: 0.95,
    icon: '01d',
  },
  {
    hour: '11:00',
    temperature: 17,
    description: 'Haze',
    pop: 0.9,
    icon: '01d',
  },
  {
    hour: '12:00',
    temperature: 16,
    description: 'Haze',
    pop: 0.7,
    icon: '01d',
  },
  {
    hour: '13:00',
    temperature: 15,
    description: 'Drizzle',
    pop: 0.5,
    icon: '01d',
  },
  {
    hour: '14:00',
    temperature: 14,
    description: 'Drizzle',
    pop: 0.3,
    icon: '01d',
  },
  {
    hour: '15:00',
    temperature: 13,
    description: 'Snow',
    pop: 0.15,
    icon: '01d',
  },
  {
    hour: '16:00',
    temperature: 12,
    description: 'Snow',
    pop: 0.1,
    icon: '01d',
  },
]

const NextHoursForecast = () => {
  return (
    <View style={{ width: '80%', height: '100%' }}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.container}
        style={{ flex: 1 }}
      >
        {hourly.map((hour) => {
          return (
            <View style={styles.cardHour} key={hour.hour}>
              <Text style={styles.textHour}>{hour.hour}</Text>
              <Image
                style={{ height: 60, width: 60 }}
                source={{
                  uri: `http://openweathermap.org/img/w/${hour.icon}.png`,
                }}
              />
              <Text style={styles.textTemperature}>{hour.temperature}º</Text>
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
