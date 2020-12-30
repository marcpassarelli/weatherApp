import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

const LocationTextInput = ({ handleOnChangeText }) => (
  <View style={styles.container}>
    <TextInput
      onChangeText={handleOnChangeText}
      style={styles.textInput}
      placeholder='Type a location...'
    />
    <View style={styles.containerIcon}>
      <Icon name='magnify' size={45} color='#472c82' style={styles.icon} />
    </View>
  </View>
)

export default LocationTextInput
