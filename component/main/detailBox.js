import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { getHours, getMinutes, getSeconds } from '../../global/global';
import scheduleFile from './../../assets/schedule.json';
import { MaterialIcons } from '@expo/vector-icons';
function dayText(str) {
  return str.toUpperCase().slice(0, 3);
}


let min = 3600 * 7
let max = 3600 * 11.5 - min;



let time = 0;
let newTime = 0;
export default function DetailBox({ navigation, schedule }) {
  // let [time, setTime] = useState(3600 * 7 - min);
  let [sliderTime, setSliderTime] = useState('0%');
  let [now, setNow] = useState(3600 * 7)


  useEffect(() => {
    const interval = setInterval(() => {
      time = (getHours() * 3600 + getMinutes() * 60 + getSeconds()) - min
      newTime = ((time) / max) * 100

      if (newTime > 100) {
        newTime = 100
      } else if (newTime < 0) {
        newTime = 1
      }

      setNow(now + 100)
      setSliderTime(`${newTime}%`);
      // setTime(time => time + 100)
    }, 1000);
    return () => clearInterval(interval);
  }, [time, sliderTime]);


  function getSliderHeight() {
    return { height: sliderTime }
  }




  function ProgressBar2({ from, to }) {
    const [percentage, setPercentage] = useState(((((getHours() * 3600 + getMinutes() * 60 + getSeconds()) - from) / (to - from)) * 100))
    if (percentage > 100) {
      setPercentage(100)
    } else if (percentage < 0) {
      setPercentage(0)
    }

    function getSliderHeight2() {
      return { width: `${percentage}%` }
    }

    return (<View style={[styles.progressBar2, getSliderHeight2()]}>
      <Text style={styles.progressBar2Text}>{Math.round(percentage)}%</Text>
    </View>)
  }
  function SubjectBox({ subject }) {
    let [hf1, mf1] = subject.from.split(':')
    let [ht1, mt1] = subject.to.split(':')
    let timefrom = hf1 * 3600 + mf1 * 60
    let timeto = ht1 * 3600 + mt1 * 60
    let now = getHours() * 3600 + getMinutes() * 60



    function bgSuccess() {
      if (now > timefrom && now < timeto) {
        return { backgroundColor: '#0277df' }
      } else if (now > timeto) {
        return { backgroundColor: '#fff' }
      } else if (now < timefrom) {
        return { backgroundColor: '#df7702' }
      } else {
        return {

        }
      }


    }

    function bgSuccessText() {
      if (now > timefrom && now < timeto) {
        return { color: 'white' }
      } else if (now > timeto) {
        return { color: 'black' }
      } else if (now < timefrom) {
        return { color: 'black' }
      } else {
        return {
          color: 'black'
        }
      }
    }
    return (
      <View style={[styles.subjectBox, bgSuccess()]}>
        <View style={styles.row}>
          <View>
            <Text style={[styles.subjectText, bgSuccessText()]}>{subject.name}</Text>
            <Text style={[styles.teacher, bgSuccessText()]}>{subject.teacher}</Text>
          </View>
          <View>
            <Text style={[styles.duration, bgSuccessText]}>
              {subject.from} - {subject.to}
            </Text>
          </View>
        </View>
        <View style={styles.progressBar2Container}>
          <ProgressBar2 from={timefrom} to={timeto} />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.subjectContainer}>
          <SubjectBox subject={schedule.subjects[0]} />
          <View style={styles.break}>
            <Text style={styles.breakText}>
              Istirahat
            </Text>
          </View>
          <SubjectBox subject={schedule.subjects[1]} />
          <View style={styles.break}>
            <Text style={styles.breakText}>
              Istirahat
            </Text>
          </View>
          <SubjectBox subject={schedule.subjects[2]} />
        </View>
        <View style={styles.sliderContainer}>
          <View style={[styles.slider, getSliderHeight()]}>
            <MaterialIcons name="timer" style={styles.time} />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '92%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 500,
    borderRadius: 10,
  },
  subjectContainer: {
    width: '90%',
  },
  subjectBox: {
    backgroundColor: 'white',
    elevation: 3,
    padding: 10,
    flex: 7,
    borderRadius: 10
  },
  subjectText: {
    fontSize: 20
  },
  teacher: {
    fontSize: 16
  },
  duration: {
    fontSize: 30,
    alignSelf: 'flex-end'
  },
  break: {
    padding: 10,
    flex: 3
  },
  breakText: {
    fontSize: 20
  },
  sliderContainer: {
    width: '8%',
    height: '100%'
  },
  slider: {
    width: '100%',
    backgroundColor: '#0277df',
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
  },
  time: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    color: 'white'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progressBar2Container: {
    height: 20,
    width: '100%',
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: '#eee',
  },
  progressBar2: {
    height: 20,
    width: '10%',
    borderRadius: 10,

    backgroundColor: '#0277df',
  },
  progressBar2Text: {
    color: 'white',
    marginLeft: 10,
  }
})
