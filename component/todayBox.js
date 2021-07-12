import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import scheduleFile from './../assets/schedule.json';
import { today } from '../global/global';
import { MaterialIcons } from '@expo/vector-icons';
function dayText(str) {
  return str.toUpperCase().slice(0, 3);
}


function LiburText() {
  if (today == 5 || today == 6) {
    return (<Text style={styles.libur}>Libur</Text>)
  } else { return (<View></View>) }
}

export default function scheduleBox({ navigation }) {


  const [schedules, setSchedules] = useState(scheduleFile);

  const handlePress = () => {
    navigation.navigate('SubjectDetail', { schedule: schedules[today] })
  }
  return (
    <View style={styles.scheduleContainer}>

      <TouchableOpacity onPress={handlePress}>
        <View style={styles.todayContainer}>
          <Text style={styles.dayText}>{`${schedules[today].day.toUpperCase()}`}</Text>
          <View style={styles.todaySubjectContainer}>
            {schedules[today].subjects?.map((subject, i) => {
              return (
                <View key={subject.no} style={i === 1 ? [styles.todaySubjectBox, styles.sideBorder] : styles.todaySubjectBox}>
                  <Text style={styles.todaySubject}>{subject.name}</Text>
                  <Text style={styles.todayDuration}>{`${subject.from} - ${subject.to}`}</Text>
                  <Text style={styles.todayTeacher}>{subject.teacher}</Text>
                </View>
              )
            })
            }
            <LiburText />
          </View>

          <Text style={styles.detail}>Click for more detail <MaterialIcons name="arrow-right" style={styles.detail} /></Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  sideBorder: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#555'
  },
  todaySubjectContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 20
  },
  todaySubjectBox: {
    width: 150,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  todayDuration: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555'
  },
  todaySubject: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#444'
  },
  todayTeacher: {
    textAlign: 'center',

  },
  todayContainer: {
    borderRadius: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderTopColor: '#eee',
    borderRightWidth: 3,
    borderBottomColor: '#eee',
    borderLeftWidth: 3,
    borderRightColor: '#0277df',
    borderLeftColor: '#0277df',
    marginBottom: 30,
    minWidth: '90%',
    backgroundColor: 'white',
    elevation: 3,

  },
  todayTitle: {
    textAlign: 'center',
    fontSize: 30,
    color: '#0277df',
    fontWeight: '700',
    marginBottom: 10,
  },
  dayText: {
    fontSize: 30,
    color: '#e64a19',
    textAlign: 'center',
    marginBottom: 5
  },
  scheduleContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  libur: {
    fontSize: 40,
    color: 'red',
    textAlign: 'center'
  },
  detail: {
    textAlign: 'center',
    color: '#aaa',
    paddingBottom: 10,
  }
})
