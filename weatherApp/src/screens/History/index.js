import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { getLastPosition } from '../../utils/localStorage'
import { API_KEY } from '@env'
import NextHoursForecast from '../../sharedComponents/NextHoursForecast'
import { format, fromUnixTime } from 'date-fns'
import styles from './styles'

const History = () => {
  const [listOfDays, setListOfDays] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getLastPosition().then(({ lat, lon }) => {
      let promises = []
      let days = []
      //5 calls, 1 for each of the past days
      for (let i = 1; i < 6; i++) {
        let timeNow = new Date()
        timeNow.setDate(timeNow.getDate() - i)
        const dtForDay = Math.round(timeNow / 1000)
        promises.push(
          fetch(
            `http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${dtForDay}&units=metric&appid=${API_KEY}`
          )
            .then((res) => res.json())
            .then((result) => {
              days.push(result)
            })
        )
      }

      Promise.all(promises).then(() => {
        //sort by ascending order
        const sortedListOfDays = days.sort(
          (a, b) => a.current.dt - b.current.dt
        )
        setListOfDays(sortedListOfDays)
        setLoading(false)
      })
    })
  }, [])

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.textTitle}>Hourly Weather for past 5 days</Text>
        {!loading ? (
          <>
            {listOfDays.map((day, index) => {
              return (
                <View style={styles.containerDay} key={index}>
                  <Text style={styles.textDate}>
                    {format(fromUnixTime(day.current.dt), 'd/M/yyyy')}
                  </Text>
                  <NextHoursForecast
                    timezoneOffset={day.timezone_offset}
                    weatherInfo={day.hourly.slice(0, 24)}
                  />
                </View>
              )
            })}
          </>
        ) : (
          <Text style={styles.textLoading}>Loading...</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default History
