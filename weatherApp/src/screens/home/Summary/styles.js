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
    width: '80%',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
    padding: 10,
  },
  leftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightInfo: {
    flexDirection: 'column',
  },
  textCurrentTemperature: {
    fontSize: 24,
  },
  textRightInfo: {
    fontSize: 16,
  },
})

export default styles
