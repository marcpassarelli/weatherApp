import React, { useEffect, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import LocationTextInput from "./LocationTextInput";
import Summary from "./Summary";
import NextHoursForecast from "../../components/NextHoursForecast";
import SevenDaysForecast from "./SevenDaysForecast";

import Crashes from "appcenter-crashes";
import Analytics from "appcenter-analytics";

import styles from "./styles";

import { API_KEY, API_GOOGLE_KEY } from "@env";
import SearchList from "./SearchList";
import useGetWeatherInfo from "../../hooks/useGetWeatherInfo";

const Home = () => {
  const [searchResultList, setSearchResultList] = useState();
  const [loading, setLoading] = useState(false);
  const { loadingWeatherInfo, weatherInfoForecast, weatherInfoSummary } =
    useGetWeatherInfo();
  const { navigate } = useNavigation();

  useEffect(() => {
    checkPreviousSession();
  }, []);
  // useEffect(() => {
  //   if (!loadingWeatherInfo) {
  //     setLoading(false);
  //   }
  // }, [loadingWeatherInfo]);

  const goToHistory = () => {
    navigate("History");
  };

  const handleOnChangeTextInput = async (text) => {
    if (text.length > 2) {
      await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${text.trim()}`
      )
        .then((response) => response.json())
        .then((result) => {
          const locations = result.map((location) => {
            return {
              key: location.Key,
              latitude: location.GeoPosition.Latitude,
              longitude: location.GeoPosition.Longitude,
              cityName: location.EnglishName,
              administrativeArea: location.AdministrativeArea.EnglishName,
              country: location.Country.EnglishName,
            };
          });
          setSearchResultList(locations);
        });
    } else if (text.length === 0) {
      setSearchResultList();
    }
  };

  const checkPreviousSession = async () => {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      alert(
        "Sorry about the crash, we're working so this don't happeng again."
      );
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps={"handled"}
        contentContainerStyle={styles.container}
      >
        <LocationTextInput handleOnChangeText={handleOnChangeTextInput} />
        {searchResultList && (
          <SearchList
            onPressLocation={(lat, long) => {
              console.log("lat", lat);
              console.log("long", long);
              // loadWeatherInfo(lat, long);
            }}
            searchResultList={searchResultList}
          />
        )}
        {!loading ? (
          Object.keys(weatherInfoSummary).length > 0 ? (
            <>
              {/* <Summary
                weatherInfoCurrent={weatherInfoSummary}
                weatherInfoDay={weatherInfoForecast.daily[0]}
              />
              <NextHoursForecast
                timezoneOffset={weatherInfoForecast.timezone_offset}
                weatherInfo={weatherInfoForecast.hourly.slice(0, 24)}
              />
              <SevenDaysForecast
                weatherInfo={weatherInfoForecast.daily.slice(0, 7)}
              /> */}
              <TouchableOpacity
                onPress={goToHistory}
                style={styles.buttonHistory}
              >
                <Text style={styles.textButtonHistory}>
                  See history (Last 5 Days)
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.textInsertLocation}>
              Search for a location above
            </Text>
          )
        ) : (
          <Text style={styles.textInsertLocation}>Loading information...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
