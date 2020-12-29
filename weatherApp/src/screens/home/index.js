import React, { useEffect, useState } from 'react'
import { Pressable, SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import LocationTextInput from './LocationTextInput'
import Summary from './Summary'
import NextHoursForecast from './NextHoursForecast'
import SevenDaysForecast from './SevenDaysForecast'

import styles from './styles'
import useGetPosition from '../../hooks/useGetPosition'

import { API_KEY } from '@env'

const Home = () => {
  const [weatherInfoSummary, setWeatherInfoSummary] = useState({})
  const [weatherInfoForecast, setWeatherInfoForecast] = useState({})
  const [loading, setLoading] = useState(true)
  const [currentLocation, loadingLocation] = useGetPosition()
  const { navigate } = useNavigation()

  useEffect(() => {
    if (!loadingLocation) {
      let promises = []

      //fetch info for weather summary
      promises.push(
        fetch(
          `https://api.openweathermap.org/data/2.5/find?lat=${currentLocation.coords.latitude}&lon=${currentLocation.coords.longitude}&cnt=10&units=metric&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeatherInfoSummary(result.list[2])
          })
      )

      //fetch info for forecast
      promises.push(
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${currentLocation.coords.latitude}&lon=${currentLocation.coords.longitude}&exclude=current,minutely,alerts&units=metric&appid=${API_KEY}`
        )
          .then((res) => res.json())
          .then((result) => {
            setWeatherInfoForecast(result)
          })
      )

      Promise.all(promises).then(() => {
        setLoading(false)
      })
    }
  }, [loadingLocation])

  const goToHistory = () => {
    navigate('History')
  }

  return (
    <SafeAreaView style={styles.container}>
      <LocationTextInput />
      {!loading ? (
        <>
          <Text style={styles.cityName}>
            {weatherInfoSummary.name} - {weatherInfoSummary.sys.country}
          </Text>
          <Summary weatherInfo={weatherInfoSummary} />
          <NextHoursForecast
            weatherInfo={weatherInfoForecast.hourly.slice(0, 24)}
          />
          <SevenDaysForecast />
          <Pressable onPress={goToHistory} style={styles.buttonHistory}>
            <Text style={styles.textButtonHistory}>
              See history (Last 30 Days)
            </Text>
          </Pressable>
        </>
      ) : (
        <Text style={styles.textInsertLocation}>
          Search for a location to see its forecast
        </Text>
      )}
    </SafeAreaView>
  )
}

export default Home
