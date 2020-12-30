import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    shadowColor: 'rgba(43, 189, 204, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: 'rgba(71, 44, 130,.1)',
    elevation: 3,
    borderRadius: 8,
    width: '80%',
    justifyContent: 'space-between',
    height: 120,
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  cityName: {
    fontSize: 20,
  },
  imgFlag: { height: 20, width: 25, marginLeft: 10 },
  containerWeatherInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  leftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgWeather: {
    height: 70,
    width: 70,
  },
  rightInfo: {
    alignItems: 'center',
  },
  textCurrentTemperature: {
    fontSize: 24,
  },
  textRightInfo: {
    fontSize: 16,
  },
})

export default styles
