import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import LocationTextInput from './LocationTextInput'
import Summary from './Summary'
import NextHoursForecast from './NextHoursForecast'
import SevenDaysForecast from './SevenDaysForecast'

import styles from './styles'
import useGetPosition from '../../hooks/useGetPosition'

import { API_KEY } from '@env'
import SearchList from './SearchList'

const Home = () => {
  const [weatherInfoSummary, setWeatherInfoSummary] = useState({})
  const [weatherInfoForecast, setWeatherInfoForecast] = useState({})
  const [searchResult, setSearchResult] = useState()
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
            setWeatherInfoSummary(result.list[0])
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

  const handleOnChangeTextInput = async (text) => {
    if (text.length > 2) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${text.trim()}&type=like&sort=population&cnt=30&units=metric&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          setSearchResult(result)
        })
    } else if (text.length === 0) {
      setSearchResult()
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <LocationTextInput handleOnChangeText={handleOnChangeTextInput} />
      {searchResult && <SearchList searchResult={searchResult} />}
      {!loading ? (
        <>
          <Text style={styles.cityName}>
            {weatherInfoSummary.name} - {weatherInfoSummary.sys.country}
          </Text>
          <Summary weatherInfo={weatherInfoSummary} />
          <NextHoursForecast
            weatherInfo={weatherInfoForecast.hourly.slice(0, 24)}
          />
          <SevenDaysForecast
            weatherInfo={weatherInfoForecast.daily.slice(0, 7)}
          />
          <TouchableOpacity onPress={goToHistory} style={styles.buttonHistory}>
            <Text style={styles.textButtonHistory}>
              See history (Last 30 Days)
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.textInsertLocation}>Loading information...</Text>
      )}
    </SafeAreaView>
  )
}

export default Home
