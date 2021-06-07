import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerScrollView: {
    position: 'absolute',
    top: 90,
    height: 120,
    width: '85%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    zIndex: 5,
    padding: 10,
    borderRadius: 8,
  },
  rowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 35,
  },
  textCity: { fontSize: 18, color: '#472c82' },
  imgFlag: { height: 16, width: 21, marginLeft: 10 },
})

export default styles
