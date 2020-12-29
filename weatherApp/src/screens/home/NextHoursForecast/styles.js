import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(71, 44, 130,.1)',
    width: '80%',
    flexDirection: 'row',
    shadowColor: 'rgba(43, 189, 204, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 3,
    marginTop: 15,
    borderRadius: 8,
    width: '80%',
  },
  containerScrollView: {
    padding: 10,
    height: '100%',
  },
  cardHour: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  textHour: {
    fontSize: 16,
  },
  textTemperature: {
    fontSize: 20,
    marginBottom: 5,
  },
  textPrecipitation: {
    marginLeft: 5,
  },
  containerPrecipitation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
