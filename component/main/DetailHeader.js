import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, } from "react-native";
import ClockBox from './clockBox';
export default function DetailHeader() {
  const months = ['January', 'February', 'March', 'April', "May", "June", "July", "August", "September", "October", "November", "December"]
  const month = months[new Date().getMonth()]
  const date = new Date().getDate()
  const year = new Date().getFullYear()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        {/* <Image source={require('../assets/icon.png')} style={styles.heroIcon}></Image> */}

        <Text style={styles.month}>{month}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>
      <View style={styles.textContainer}>
        <ClockBox />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#eee',
    shadowColor: 'black',
    elevation: 2,
    margin: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  iconContainer: {
    backgroundColor: '#0277df',
    flex: -1,
    marginRight: 10,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
    height: 150,
  },
  month: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    includeFontPadding: false,
    padding: 0,
    margin: 0,
  },
  day: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    includeFontPadding: false,
    padding: 0,
    margin: 0,
  },
  date: {
    fontSize: 75,
    fontWeight: 'bold',
    color: 'white',
    includeFontPadding: false,
    padding: 0,
    margin: 0,
  },
  year: {
    color: 'white',
    includeFontPadding: false,
    padding: 0,
    margin: 0,
    fontSize: 20,
  },
  heroIcon: {
    width: 150,
    height: 150,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: '#004c8c',
  },
  textContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'

  },
  name: {
    fontSize: 30,
    flex: -1,
    color: '#444',
    fontWeight: 'bold'
  },
  class: {
    fontSize: 15,
    flex: -1,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#5ee019',
    padding: 2,
    color: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    padding: 10
  },
})
