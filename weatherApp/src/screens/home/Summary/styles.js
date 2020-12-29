import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: 'rgba(43, 189, 204, .4)',
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: 'rgba(71, 44, 130,.1)',
    elevation: 3,
    borderRadius: 8,
    width: '80%',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  leftInfo: {
    flexDirection: 'row',
    alignItems: 'center',
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
