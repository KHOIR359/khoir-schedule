import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, } from "react-native";
import ClockBox from './clockBox';
import { resStyle } from '../../global/global';

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
    margin: resStyle.v20,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: resStyle.v10,
    borderColor: '#eee',
    shadowColor: 'black',
    elevation: 2,
    margin: resStyle.v20,
    paddingHorizontal: resStyle.v20,
    paddingVertical: resStyle.v10,
    backgroundColor: 'white',
  },
  iconContainer: {
    backgroundColor: '#0277df',
    flex: -1,
    marginRight: resStyle.v10,
    width: resStyle.v150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: resStyle.v20,
    padding: resStyle.v10,
    height: resStyle.v150,
  },
  month: {
    fontWeight: 'bold',
    fontSize: resStyle.v20,
    color: 'white',
    includeFontPadding: false,
    padding: 0,
    margin: 0,
  },
  day: {
    fontWeight: 'bold',
    fontSize: resStyle.v20,
    color: 'white',
    includeFontPadding: false,
    padding: 0,
    margin: 0,
  },
  date: {
    fontSize: resStyle.v75,
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
    fontSize: resStyle.v20,
  },
  heroIcon: {
    width: resStyle.v150,
    height: resStyle.v150,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 150 / 2,
    borderWidth: 3,
    borderColor: '#004c8c',
  },
  textContainer: {
    paddingTop: resStyle.v10,
    paddingLeft: resStyle.v10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'

  },
  name: {
    fontSize: resStyle.v30,
    flex: -1,
    color: '#444',
    fontWeight: 'bold'
  },
  class: {
    fontSize: resStyle.v15,
    flex: -1,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#5ee019',
    padding: 2,
    color: 'white',
    borderRadius: 5,
    paddingHorizontal: resStyle.v10,
    marginTop: resStyle.v10,
    padding: resStyle.v10,
  },
})
