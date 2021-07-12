import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import scheduleFile from '../../assets/schedule.json';
import ScheduleBox from '../../component/scheduleBox.js'
import TodayBox from '../../component/todayBox.js'
import MainHeader from '../../component/main/mainHeader.js'
import { firstOpen } from '../../db/conn'

firstOpen()


function MainScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <StatusBar hidden />

      <ScrollView style={styles.ScrollView}>
        <MainHeader navigation={navigation} />

        <View style={styles.secondContainer}>
          <Text style={styles.dayTitle}>Today</Text>
          <TodayBox navigation={navigation} />
          <Text style={styles.dayTitle}>Upcoming Schedule</Text>
          <ScheduleBox />
        </View>
      </ScrollView>
    </View>
  )

}

const styles = StyleSheet.create({

  dayTitle: {
    textAlign: 'center',
    fontSize: 30,
    color: '#0277df',
    fontWeight: '700',
    marginBottom: 10,
  },
  ScrollView: {
    width: '100%',
    // backgroundColor: '#0277df'
  },
  sideBorder: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#555'
  },
  footerText: {
    textAlign: 'center'
  },
  xtraspace: {
    padding: 30,
    height: 60,
    marginTop: 10
  },
  background: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    backgroundColor: 'white'
  },
  secondContainer: {
    width: "100%",
    marginTop: 10,
    padding: 10,
  },


})

export default MainScreen;