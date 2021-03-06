import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    shadowColor: "rgba(43, 189, 204, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: "rgba(71, 44, 130,.1)",
    elevation: Platform.OS === "android" ? 0 : 3,
    borderRadius: 8,
    width: "90%",
    justifyContent: "space-evenly",
    height: 140,
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 10,
  },
  containerTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  cityName: {
    fontSize: 20,
    marginRight: 10,
  },
  containerWeatherInfo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
  leftInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightInfo: {
    alignItems: "center",
  },
  textCurrentTemperature: {
    fontSize: 24,
  },
  textRightInfo: {
    fontSize: 16,
  },
});

export default styles;
