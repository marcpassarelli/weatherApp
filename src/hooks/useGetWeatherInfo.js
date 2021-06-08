import { useEffect, useState } from "react";
import { API_KEY } from "@env";
import {
  storeLastPositionInLocalStorage,
  getLastPositionFromLocalStorage,
} from "../utils/localStorage";
import useGetPosition from "./useGetPosition";

const useGetWeatherInfo = () => {
  const [loadingWeatherInfo, setLoadingWeatherInfo] = useState(true);
  const [weatherInfoSummary, setWeatherInfoSummary] = useState({});
  const [weatherInfoForecast, setWeatherInfoForecast] = useState({});
  const [currentLocation, loadingLocation] = useGetPosition();

  useEffect(() => {
    getLastPositionFromLocalStorage()
      .then(({ lat, lon }) => {
        loadWeatherInfo(lat, lon);
      })
      .catch((error) => {
        //if there is no location
        if (!loadingLocation && Object.keys(currentLocation).length > 0) {
          loadWeatherInfo(
            currentLocation.coords.latitude,
            currentLocation.coords.longitude
          );
        } else {
          setLoading(false);
        }
      });
  }, [loadingLocation]);

  const loadWeatherInfo = async (lat, lon) => {
    setLoadingWeatherInfo(true);
    //fetch info for weather summary
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherInfoSummary(result);
      });

    //fetch info for forecast
    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeatherInfoForecast(result);
      });

    storeLastPositionInLocalStorage(lat.toString(), lon.toString());
    setLoadingWeatherInfo(false);
  };

  return { loadingWeatherInfo, weatherInfoForecast, weatherInfoSummary };
};

export default useGetWeatherInfo;
