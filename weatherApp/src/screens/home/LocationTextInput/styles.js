import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  textInput: {
    width: '80%',
    height: 60,
    paddingLeft: 10,
    fontSize: 18,
    borderWidth: 2,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderColor: '#2BBDCC',
  },
  containerIcon: {
    height: 60,
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderColor: '#2BBDCC',
  },
})

export default styles
