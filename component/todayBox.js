import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import scheduleFile from './../assets/schedule.json';
import { today } from '../global/global';
import { MaterialIcons } from '@expo/vector-icons';
import { resStyle } from '../global/global';
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
    marginTop: resStyle.v10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: resStyle.v20
  },
  todaySubjectBox: {
    width: resStyle.v150,
    // width: 150,
    height: resStyle.v75,
    alignItems: 'center',
    justifyContent: 'center'
  },
  todayDuration: {
    // fontSize: 14,
    fontSize: resStyle.v10,
    textAlign: 'center',
    color: '#555'
  },
  todaySubject: {
    fontSize: resStyle.v20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#444'
  },
  todayTeacher: {
    textAlign: 'center',
    fontSize: resStyle.v10

  },
  todayContainer: {
    borderRadius: 10,
    paddingVertical: resStyle.v5,
    borderWidth: 1,
    borderTopColor: '#eee',
    borderRightWidth: 3,
    borderBottomColor: '#eee',
    borderLeftWidth: 3,
    borderRightColor: '#0277df',
    borderLeftColor: '#0277df',
    marginBottom: resStyle.v30,
    backgroundColor: 'white',
    elevation: 3,
  },
  dayText: {
    fontSize: resStyle.v30,
    color: '#e64a19',
    textAlign: 'center',
    marginBottom: resStyle.v5
  },
  scheduleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  libur: {
    fontSize: resStyle.v30,
    color: 'red',
    textAlign: 'center'
  },
  detail: {
    textAlign: 'center',
    color: '#aaa',
    paddingBottom: resStyle.v2,
    fontSize: resStyle.v10,
  }
})
