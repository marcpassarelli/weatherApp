import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '80%',
    shadowColor: 'rgba(43, 189, 204, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    marginTop: 15,
    borderRadius: 8,
    width: '80%',
    padding: 10,
  },
  cardDay: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textDayMonth: {
    fontSize: 16,
  },
  textTemperature: {
    fontSize: 16,
    marginBottom: 5,
  },
  textPrecipitation: {
    marginLeft: 5,
  },
  containerDay: {
    width: '25%',
  },
  containerIcon: {
    width: '25%',
  },
  containerTemperature: {
    width: '25%',
  },
  containerPrecipitation: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
