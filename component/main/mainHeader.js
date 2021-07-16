import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, Dimensions } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { resStyle } from '../../global/global';
export default function MainHeader({ navigation }) {
  const [name, setName] = useState('')
  const [classInfo, setClassInfo] = useState('')

  useEffect(() => {
    let interval = setInterval(() => {
      updateState()
      return () => { clearInterval(interval) }
    }, 1000)

  }, [])

  function updateState() {
    AsyncStorage.getItem('username').then((item) => {
      setName(item)
    })
    AsyncStorage.getItem('classinfo').then((item) => {
      setClassInfo(item)
    })
  }




  const months = ['January', 'February', 'March', 'April', "May", "June", "July", "August", "September", "October", "November", "December"]
  const month = months[new Date().getMonth()]
  const date = new Date().getDate()
  const year = new Date().getFullYear()
  return (
    <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
        {/* <Image source={require('../assets/icon.png')} style={styles.heroIcon}></Image> */}

        <Text style={styles.month} allowFontScaling={true}>{month}</Text>
        <Text style={styles.date} allowFontScaling={true}>{date}</Text>
        <Text style={styles.year} allowFontScaling={true}>{year}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.class}>{classInfo}</Text>
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('User') }} >
          <Text style={styles.editButton}>
            <MaterialIcons name="edit" style={styles.editButton} />

            &nbsp;Edit Profile</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: resStyle.v10,
    borderColor: '#eee',
    shadowColor: 'black',
    elevation: 2,
    margin: resStyle.v10,
    paddingHorizontal: resStyle.v30,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: resStyle.v10,
    backgroundColor: 'white',
  },
  iconContainer: {
    backgroundColor: '#0277df',
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
    fontSize: resStyle.v40,
    flex: -1,
    color: '#444',
    fontWeight: 'bold'
  },
  class: {
    fontSize: resStyle.v20,
    flex: -1,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#5ee019',
    color: 'white',
    borderRadius: 5,
    fontSize: resStyle.v10,
    paddingHorizontal: resStyle.v10,
    marginTop: resStyle.v10,
    padding: resStyle.v10,
  },
})
