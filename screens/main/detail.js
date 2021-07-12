import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, } from "react-native";
import DetailHeader from '../../component/main/DetailHeader.js'
import DetailBox from '../../component/main/detailBox.js'

export default function DetailScreen({ navigation, route }) {
  return (
    <View style={styles.background}>
      <StatusBar hidden />

      <ScrollView style={styles.ScrollView}>
        <DetailHeader />
        <View style={styles.mainContainer}>
          <DetailBox schedule={route.params['schedule']} />
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
  mainContainer: {
    width: "100%",
  },


})
