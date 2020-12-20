import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import LocationTextInput from './LocationTextInput'

import styles from './styles'
import Summary from './Summary'

const Home = () => {
  const [isThereALocation, setIsThereALocation] = useState(true)
  return (
    <SafeAreaView style={styles.container}>
      <LocationTextInput />
      {isThereALocation ? (
        <>
          <Text style={styles.cityName}>Altamira - Brazil</Text>
          <Summary />
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
