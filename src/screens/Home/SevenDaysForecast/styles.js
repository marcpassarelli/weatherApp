import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(71, 44, 130,.1)",
    width: "90%",
    shadowColor: "rgba(43, 189, 204, .4)",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: Platform.OS === "android" ? 0 : 3,
    marginTop: 15,
    borderRadius: 8,
    padding: 10,
  },
  cardDay: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textDayWeek: {
    fontSize: 16,
  },
  textTemperature: {
    fontSize: 16,
    marginBottom: 5,
  },
  containerDay: {
    width: "30%",
  },
  containerIcon: {
    width: "20%",
  },
  containerTemperature: {
    width: "25%",
  },
});

export default styles;
