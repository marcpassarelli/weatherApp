import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles'

const Summary = () => (
  <View style={styles.container}>
    <View style={styles.leftInfo}>
      <Text style={styles.textCurrentTemperature}>38º</Text>
      <Icon name='weather-sunny' color='#472c82' size={50} />
    </View>
    <View style={styles.rightInfo}>
      <Text style={styles.textRightInfo}>27º / 38º</Text>
      <Text style={styles.textRightInfo}>Feels like: 42º</Text>
      <Text style={styles.textRightInfo}>Sunny</Text>
    </View>
  </View>
)

export default Summary
