import React, { useEffect, useState } from 'react'
import { Pressable, SafeAreaView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import LocationTextInput from './LocationTextInput'
import Summary from './Summary'
import NextHoursForecast from './NextHoursForecast'
import SevenDaysForecast from './SevenDaysForecast'

import styles from './styles'
import useGetCurrentPosition from '../../hooks/useGetCurrentPosition'

const Home = () => {
  const [isThereALocation, setIsThereALocation] = useState(true)
  const [loading, setLoading] = useState(false)
  const [currentLocation, loadingLocation] = useGetCurrentPosition()
  const { navigate } = useNavigation()

  useEffect(() => {
    if (!loadingLocation) {
      console.log('currentLocation', currentLocation)
    }
  }, [loadingLocation])

  const goToHistory = () => {
    navigate('History')
  }

  return (
    <SafeAreaView style={styles.container}>
      <LocationTextInput />
      {!loadingLocation ? (
        <>
          <Text style={styles.cityName}>Altamira - Brazil</Text>
          <Summary />
          <NextHoursForecast />
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
