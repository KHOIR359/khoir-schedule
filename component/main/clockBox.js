import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import scheduleFile from './../../assets/schedule.json';
import { today } from '../../global/global';
import { getHours, getMinutes, getSeconds } from '../../global/global';

export default function ClockBox({ navigation }) {
  let [seconds, setSecond] = useState(getSeconds());
  let [minutes, setMinute] = useState(getMinutes());
  let [hours, setHour] = useState(getHours());

  let inter = setInterval(() => {
    setSecond(new Date().getSeconds())
    setMinute(new Date().getMinutes())
    setHour(new Date().getHours())
  }, 1000);


  const [schedules, setSchedules] = useState(scheduleFile);

  const handlePress = () => {

  }
  return (
    <View style={styles.scheduleContainer}>
      <Text style={styles.dayName}>{schedules[today].day}</Text>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.timeBox}>
            <Text style={styles.timeName}>
              HOURS
            </Text>
            <Text style={styles.timeText}>
              {hours}
            </Text>
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.timeName}>
              MINUTES
            </Text>
            <Text style={styles.timeText}>
              {minutes}
            </Text>
          </View>
          <View style={styles.timeBox}>
            <Text style={styles.timeName}>
              SECONDS
            </Text>
            <Text style={styles.timeText}>
              {seconds}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeBox: {
    height: 80,
    width: 80,
    // elevation: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    // borderColor: '#eee',
    // borderWidth: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  timeText: {
    textAlign: 'center',
    fontSize: 40
  },
  timeName: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0277df'
  },
  dayName: {
    color: '#0277df',
    fontSize: 35,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 5,
    textTransform: 'capitalize',
    textAlign: 'center',

  }
})
