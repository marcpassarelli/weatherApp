import { useEffect, useState } from 'react'
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native'

import Geolocation from 'react-native-geolocation-service'
import AsyncStorage from '@react-native-async-storage/async-storage'

const useGetPosition = () => {
  const [currentLocation, setCurrentLocation] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLocation()
  }, [])

  const hasLocationPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings')
      })
    }
    const status = await Geolocation.requestAuthorization('whenInUse')

    if (status === 'granted') {
      return true
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied')
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow Weather App to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => {} },
        ]
      )
    }

    return false
  }

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasLocationPermissionIOS()
      return hasPermission
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )

    if (hasPermission) {
      return true
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG
      )
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG
      )
    }

    return false
  }

  const getLocation = async () => {
    const _hasLocationPermission = await hasLocationPermission()

    if (!_hasLocationPermission) {
      Alert.alert(
        'No permission',
        'Permission was not granted, insert a location in the Text Input to above'
      )
      setLoading(false)
      return
    }

    let localStorageLocation = await AsyncStorage.getItem('@location')
    localStorageLocation =
      localStorageLocation != null ? JSON.parse(localStorageLocation) : {}

    // if (Object.keys(localStorageLocation).length) {
    //   setCurrentLocation(localStorageLocation)
    //   setLoading(false)
    // } else {
    await Geolocation.getCurrentPosition(
      (position) => {
        setCurrentLocation(position)
        setLoading(false)
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message)
        setLoading(false)
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      }
    )

    // try {
    //   const jsonValue = JSON.stringify(currentLocation)
    //   await AsyncStorage.setItem('@location', jsonValue)
    // } catch (error) {
    //   console.log('error async', error)
    // }
    // }
  }

  return [currentLocation, loading]
}

export default useGetPosition
