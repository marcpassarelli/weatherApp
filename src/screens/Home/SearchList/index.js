import React from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import Flag from "react-native-flags";
import PropTypes from "prop-types";

import styles from "./styles";
const SearchList = ({ searchResultList, onPressLocation }) => {
  return (
    <ScrollView nestedScrollEnabled={true} style={styles.containerScrollView}>
      {searchResultList.length > 0 ? (
        searchResultList.map((location) => {
          return (
            <TouchableOpacity
              key={location.key}
              style={styles.rowButton}
              onPress={() => {
                onPressLocation(location.latitude, location.longitude);
              }}
            >
              <Text style={styles.textCity}>
                {location.cityName}, {location.administrativeArea},{" "}
                {location.country}
              </Text>
              {/* <Flag size={32} code={result.Country.ID} /> */}
            </TouchableOpacity>
          );
        })
      ) : (
        <Text style={styles.textCity}>No results.</Text>
      )}
    </ScrollView>
  );
};

SearchList.propTypes = {
  searchResultList: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      cityName: PropTypes.string.isRequired,
      administrativeArea: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ),
  onPressLocation: PropTypes.func.isRequired,
};

export default SearchList;
