import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
const SearchList = ({ searchResultList, onPressCity }) => {
  return (
    <ScrollView style={styles.containerScrollView}>
      {searchResultList.list.map((result, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.rowButton}
            onPress={() => {
              console.log('result', result)
              onPressCity(result.coord.lat, result.coord.lon)
            }}
          >
            <Text style={styles.textCity}>
              {result.name}, {result.sys.country}
            </Text>
            <Image
              style={styles.imgFlag}
              source={{
                uri: `http://openweathermap.org/images/flags/${result.sys.country.toLowerCase()}.png`,
              }}
            />
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}

export default SearchList
