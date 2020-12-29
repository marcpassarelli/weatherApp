import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  containerScrollView: {
    position: 'absolute',
    top: 135,
    height: 120,
    width: '75%',
    backgroundColor: 'rgba(255,255,255,0.95)',
    zIndex: 5,
    padding: 10,
    borderRadius: 8,
  },
  rowButton: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
  },
  textCity: { fontSize: 18, color: '#472c82' },
  imgFlag: { height: 20, width: 25, marginLeft: 10 },
})

export default styles
