import AsyncStorage from '@react-native-async-storage/async-storage'
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
