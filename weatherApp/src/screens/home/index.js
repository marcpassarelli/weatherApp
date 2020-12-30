import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
  const [searchResultList, setSearchResultList] = useState()
  const [loading, setLoading] = useState(true)
  const [currentLocation, loadingLocation] = useGetPosition()
  const { navigate } = useNavigation()

  useEffect(() => {
    getLastPosition()
      .then(async ({ lat, lon }) => {
        loadWeatherInfo(lat, lon)
      })
      .catch((error) => {
        console.log('error', error)
        if (!loadingLocation && Object.keys(currentLocation).length > 0) {
          loadWeatherInfo(
            currentLocation.coords.latitude,
            currentLocation.coords.longitude
          )
        } else {
          setLoading(false)
        }
      })
  }, [loadingLocation])

  const loadWeatherInfo = (lat, lon) => {
    setSearchResultList()
    setLoading(true)
    let promises = []
    //fetch info for weather summary
    promises.push(
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeatherInfoSummary(result)
        })
    )

    //fetch info for forecast
    promises.push(
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeatherInfoForecast(result)
        })
    )

    Promise.all(promises).then(() => {
      storeLastPosition(lat.toString(), lon.toString())
      setLoading(false)
    })
  }

  const storeLastPosition = async (lat, lon) => {
    try {
      await AsyncStorage.setItem('@latitude', lat)
      await AsyncStorage.setItem('@longitude', lon)
    } catch (e) {
      // saving error
    }
  }

  const getLastPosition = async () => {
    try {
      const lat = await AsyncStorage.getItem('@latitude')
      const lon = await AsyncStorage.getItem('@longitude')
      if (lat !== null && lon !== null) {
        return {
          lat: lat,
          lon: lon,
        }
      }
    } catch (e) {
      // error reading value
    }
  }

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
          setSearchResultList(result)
        })
    } else if (text.length === 0) {
      setSearchResultList()
    }
  }

  return (
    <SafeAreaView>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.container}
      >
        <LocationTextInput handleOnChangeText={handleOnChangeTextInput} />
        {searchResultList && (
          <SearchList
            onPressCity={(lat, long) => {
              loadWeatherInfo(lat, long)
            }}
            searchResultList={searchResultList}
          />
        )}
        {!loading ? (
          Object.keys(weatherInfoSummary).length > 0 ? (
            <>
              <Summary
                weatherInfoCurrent={weatherInfoSummary}
                weatherInfoDay={weatherInfoForecast.daily[0]}
              />
              <NextHoursForecast
                timezoneOffset={weatherInfoForecast.timezone_offset}
                weatherInfo={weatherInfoForecast.hourly.slice(0, 24)}
              />
              <SevenDaysForecast
                weatherInfo={weatherInfoForecast.daily.slice(0, 7)}
              />
              <TouchableOpacity
                onPress={goToHistory}
                style={styles.buttonHistory}
              >
                <Text style={styles.textButtonHistory}>
                  See history (Last 30 Days)
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.textInsertLocation}>
              Search for a location above
            </Text>
          )
        ) : (
          <Text style={styles.textInsertLocation}>Loading information...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
