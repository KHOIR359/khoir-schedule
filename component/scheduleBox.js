import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import scheduleFile from './../assets/schedule.json';
import { today } from '../global/global';
import { resStyle } from '../global/global';
function dayText(str) {
  return str.toUpperCase().slice(0, 3);
}

export default function scheduleBox(props) {

  const [schedules, setSchedules] = useState(scheduleFile);
  return (
    <View style={styles.scheduleContainer}>
      {schedules.map((item, i) => {
        if (i <= today) { return (<View key={item.no}></View>) }
        if (item.status === 'masuk') {
          return (
            <TouchableOpacity style={styles.scheduleBox} key={item.no}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.dayText}>{`${(item.day.toUpperCase())}`}</Text>
                <View style={styles.subjectContainer}>

                  {item.subjects.map((subject, j) => {
                    return (
                      <View key={subject.no} style={j === 1 ? [styles.subjectBox, styles.sideBorder] : styles.subjectBox}>
                        <Text style={styles.subject}>{`${subject.no}. ${subject.name}`}</Text>
                        <Text style={styles.duration}>{`${subject.from} - ${subject.to}`}</Text>
                        <Text style={styles.teacher}>{subject.teacher}</Text>
                      </View>
                    )
                  })}
                </View>
              </View>
            </TouchableOpacity>
          )
        } else if (item.status === 'libur') {
          return (
            <TouchableOpacity style={styles.scheduleBox} key={item.no}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.dayText}>{`${item.day.toUpperCase()}`}</Text>
                <View style={styles.liburContainer}>
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.libur}>Libur</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

          )
        }
      }
      )
      }
      {schedules.map((item, i) => {
        if (i >= today) { return (<View key={item.no}></View>) }
        if (item.status === 'masuk') {
          return (
            <TouchableOpacity style={styles.scheduleBox} key={item.no}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.dayText}>{`${(item.day.toUpperCase())}`}</Text>
                <View style={styles.subjectContainer}>

                  {item.subjects.map((subject, j) => {
                    return (
                      <View key={subject.no} style={j === 1 ? [styles.subjectBox, styles.sideBorder] : styles.subjectBox}>
                        <Text style={styles.subject}>{`${subject.no}. ${subject.name}`}</Text>
                        <Text style={styles.duration}>{`${subject.from} - ${subject.to}`}</Text>
                        <Text style={styles.teacher}>{subject.teacher}</Text>
                      </View>
                    )
                  })}
                </View>
              </View>
            </TouchableOpacity>

          )
        } else if (item.status === 'libur') {
          return (
            <TouchableOpacity style={styles.scheduleBox} key={item.no}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.dayText}>{`${item.day.toUpperCase()}`}</Text>
                <View style={styles.liburContainer}>
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.libur}>Libur</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

          )
        }
      }
      )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  sideBorder: {
    borderColor: '#aaa',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: resStyle.v10,
    height: resStyle.h90,
    alignContent: 'center',
    justifyContent: 'center'
  },
  subjectContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  subjectBox: {
    marginVertical: resStyle.v5,
    width: resStyle.v150,
    height: resStyle.h75,
  },
  duration: {
    fontSize: resStyle.v15,
    textAlign: 'center',
    color: '#555'
  },
  subject: {
    fontSize: resStyle.v20,
    textAlign: 'center',
    color: '#444',
    fontWeight: '700',

  },
  teacher: {
    textAlign: 'center',
    fontSize: resStyle.v15


  },
  title: {
    textAlign: 'center',
    fontSize: resStyle.v30,
    color: '#0277df',
    fontWeight: '700',
    marginBottom: resStyle.v10,
  },
  scheduleTitle: {
    marginBottom: resStyle.v10,
    textAlign: 'center',
    fontSize: resStyle.v30,
    color: '#0277df',
    fontWeight: '700'
  },
  dayText: {
    fontSize: resStyle.v30,
    color: '#e64a19',
    textAlign: 'center',
    marginBottom: 5
  },
  scheduleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  scheduleBox: {
    elevation: 3,
    backgroundColor: '#fefefe',
    margin: resStyle.v10,
    padding: 5,
    paddingBottom: resStyle.v20,
    borderRadius: resStyle.v10,
    borderTopColor: '#0277df',
    borderColor: '#fefefe',
    borderTopWidth: 3,
    borderRightWidth: 1,
    paddingBottom: resStyle.v20,
    paddingHorizontal: resStyle.v20,
    minHeight: resStyle.h320,
    // height: 320,
    minWidth: resStyle.v220
  },
  libur: {
    fontSize: resStyle.v40,
    color: 'red',
    textAlign: 'center'
  },
  liburContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: resStyle.h200,
  }

})
