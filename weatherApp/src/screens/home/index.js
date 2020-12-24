import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'

import LocationTextInput from './LocationTextInput'
import Summary from './Summary'
import NextHoursForecast from './NextHoursForecast'
import SevenDaysForecast from './SevenDaysForecast'

import styles from './styles'

const Home = () => {
  const [isThereALocation, setIsThereALocation] = useState(true)
  return (
    <SafeAreaView style={styles.container}>
      <LocationTextInput />
      {isThereALocation ? (
        <>
          <Text style={styles.cityName}>Altamira - Brazil</Text>
          <Summary />
          <NextHoursForecast />
          <SevenDaysForecast />
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
