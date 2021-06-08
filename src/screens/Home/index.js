import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LocationTextInput from "./LocationTextInput";
import Summary from "./Summary";
import NextHoursForecast from "../../components/NextHoursForecast";
import SevenDaysForecast from "./SevenDaysForecast";

import styles from "./styles";

import { API_KEY } from "@env";
import SearchList from "./SearchList";
import useGetWeatherInfo from "../../hooks/useGetWeatherInfo";

const Home = () => {
  const [searchResultList, setSearchResultList] = useState();
  const [loading, setLoading] = useState(true);
  const { loadingWeatherInfo, weatherInfoForecast, weatherInfoSummary } =
    useGetWeatherInfo();
  const { navigate } = useNavigation();

  useEffect(() => {
    if (!loadingWeatherInfo) {
      setLoading(false);
    }
  }, [loadingWeatherInfo]);

  const goToHistory = () => {
    navigate("History");
  };

  const handleOnChangeTextInput = async (text) => {
    if (text.length > 2) {
      await fetch(
        `https://api.openweathermap.org/data/2.5/find?q=${text.trim()}&type=like&sort=population&cnt=30&units=metric&appid=${API_KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          setSearchResultList(result);
        });
    } else if (text.length === 0) {
      setSearchResultList();
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        nestedScrollEnabled={true}
        contentContainerStyle={styles.container}
      >
        <LocationTextInput handleOnChangeText={handleOnChangeTextInput} />
        {searchResultList && (
          <SearchList
            onPressCity={(lat, long) => {
              loadWeatherInfo(lat, long);
            }}
            searchResultList={searchResultList}
          />
        )}
        {!loading ? (
          Object.keys(weatherInfoSummary).length > 0 ? (
            <>
              <Summary
                weatherInfoCurrent={weatherInfoSummary}
                weatherInfoDay={weatherInfoForecast.daily[0]}
              />
              <NextHoursForecast
                timezoneOffset={weatherInfoForecast.timezone_offset}
                weatherInfo={weatherInfoForecast.hourly.slice(0, 24)}
              />
              <SevenDaysForecast
                weatherInfo={weatherInfoForecast.daily.slice(0, 7)}
              />
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
