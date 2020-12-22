import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: 'rgba(43, 189, 204, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 8,
    justifyContent: 'center',
    height: '20%',
    alignItems: 'center',
    padding: 10,
    marginVertical: 15,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles
