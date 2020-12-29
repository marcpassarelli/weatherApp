import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
const SearchList = ({ searchResult }) => {
  return (
    <ScrollView style={styles.containerScrollView}>
      {searchResult.list.map((result, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.rowButton}
            onPress={() => {
              console.log('result', result)
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
