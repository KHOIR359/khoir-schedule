

// import React, { useState, useEffect } from 'react'
// import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { getHours, getMinutes, getSeconds } from '../../global/global';
// import { MaterialIcons } from '@expo/vector-icons';
// function dayText(str) {
//   return str.toUpperCase().slice(0, 3);
// }


// let min = 3600 * 7
// let max = 3600 * 11.5 - min;
// let time = 0;




// export default function DetailBox({ navigation, schedule }) {
//   let [sliderTime, setSliderTime] = useState('0%');

//   useEffect(() => {
//     const interval = setInterval(() => {
//       time = (getHours() * 3600 + getMinutes() * 60 + getSeconds()) - min
//       newTime = ((time) / max) * 100
//       if (newTime > 100) {
//         newTime = 100
//       } else if (newTime < 0) {
//         newTime = 0
//       }

//       setSliderTime(`${newTime}%`);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [sliderTime]);


//   function getSliderHeight() {
//     return { height: sliderTime }
//   }


//   const handlePress = () => {

//   }

//   function SubjectBox({ subject }) {
//     let [hf1, mf1] = subject.from.split(':')
//     let [ht1, mt1] = subject.to.split(':')
//     let timefrom = hf1 * 3600 + mf1 * 60
//     let timeto = ht1 * 3600 + mt1 * 60
//     // let now = getHours() * 3600 + getMinutes() * 60
//     // let now = getHours() * 3600 + getMinutes() * 60
//     let [now, setNow] = useState(0)

//     useEffect(() => {
//       setInterval(() => {
//         setNow(now + 1)
//       }, 100);
//     }, [])


//     function bgSuccess() {
//       if (now > timefrom && now < timeto) {
//         return { backgroundColor: 'blue' }
//       } else if (now > timeto) {
//         return { backgroundColor: 'green' }
//       } else if (now < timefrom) {
//         return { backgroundColor: 'yellow' }
//       } else {
//         return {
//           backgroundColor: 'white'
//         }
//       }


//     }

//     function bgSuccessText() {


//       if (now > timefrom && now < timeto) {
//         return { color: 'white' }
//       } else if (now > timeto) {
//         return { color: 'white' }
//       } else if (now < timefrom) {
//         return { color: 'black' }
//       } else {
//         return {
//           color: 'black'
//         }
//       }


//     }
//     return (
//       <View style={[styles.subjectBox, bgSuccess()]}>
//         <View style={styles.row}>
//           <View>
//             <Text style={[styles.subjectText, bgSuccessText()]}>{subject.name}</Text>
//             <Text style={[styles.teacher, bgSuccessText()]}>{subject.teacher}</Text>
//           </View>
//           <View>
//             <View>

//             </View>
//           </View>
//         </View>
//       </View>
//     )
//   }
//   return (
//     <View style={styles.mainContainer}>
//       <View style={styles.container}>
//         <View style={styles.subjectContainer}>
//           <SubjectBox subject={schedule.subjects[0]} />
//           <View style={styles.break}>
//             <Text style={styles.breakText}>
//               Istirahat
//             </Text>
//           </View>
//           <SubjectBox subject={schedule.subjects[1]} />
//           <View style={styles.break}>
//             <Text style={styles.breakText}>
//               Istirahat
//             </Text>
//           </View>
//           <SubjectBox subject={schedule.subjects[2]} />
//         </View>
//         <View style={styles.sliderContainer}>
//           <View style={[styles.slider, getSliderHeight()]}>
//             <MaterialIcons name="timer" style={styles.time} />
//           </View>
//         </View>
//       </View>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   mainContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   container: {
//     width: '90%',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     height: 500,
//     borderRadius: 10,
//     overflow: 'hidden'
//   },
//   subjectContainer: {
//     width: '90%',
//   },
//   subjectBox: {
//     backgroundColor: 'white',
//     elevation: 3,
//     padding: 10,
//     flex: 7
//   },
//   subjectText: {
//     fontSize: 20
//   },
//   teacher: {
//     fontSize: 16
//   },
//   break: {
//     padding: 10,
//     flex: 3
//   },
//   breakText: {
//     fontSize: 20
//   },
//   sliderContainer: {
//     width: '8%',
//     height: '100%'
//   },
//   slider: {
//     width: '100%',
//     backgroundColor: 'dodgerblue',

//   },
//   time: {
//     fontSize: 30,
//     textAlign: 'center',
//     marginTop: 10,
//     color: 'white'
//   },
//   row: {
//     flexDirection: 'row'
//   }
// })
