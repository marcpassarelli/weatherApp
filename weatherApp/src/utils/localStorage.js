import AsyncStorage from '@react-native-async-storage/async-storage'
import { differenceInHours, getMilliseconds } from 'date-fns'
export const storeLastPositionInLocalStorage = async (lat, lon) => {
  try {
    await AsyncStorage.setItem('@latitude', lat)
    await AsyncStorage.setItem('@longitude', lon)
  } catch (e) {
    // saving error
  }
}

export const getLastPositionFromLocalStorage = async () => {
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

export const storeLastHistoryInfoInLocalStorage = async (
  daysList,
  lat,
  lon
) => {
  try {
    const jsonValue = JSON.stringify(daysList)
    await AsyncStorage.setItem('@historyDaysList' + lat + lon, jsonValue)
    const currentDay = getMilliseconds(new Date()).toString()
    await AsyncStorage.setItem('@hourOfSavedHistory' + lat + lon, currentDay)
  } catch (e) {
    // saving error
  }
}

export const hasPassedSixHours = async (lat, lon) => {
  try {
    const dateMillisecondsLocalStorage = await AsyncStorage.getItem(
      '@hourOfSavedHistory' + lat + lon
    )
    const dateLocalStorage = new Date(dateMillisecondsLocalStorage)

    const currentDate = new Date()

    return differenceInHours(currentDate, dateLocalStorage) > 5 ? true : false
  } catch (error) {}
}

export const getLastHistoryInfoFromLocalStorage = async (lat, lon) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@historyDaysList' + lat + lon)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
  }
}
