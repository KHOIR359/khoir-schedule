import React, { useEffect, useState } from 'react';
import DrawerNavigation from './routes/drawer';
import * as Notifications from 'expo-notifications';
import { firstOpen } from './db/conn'
import SetupScreen from './screens/setup/setupScreen';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Provider } from 'react-native-paper';
import {
  BebasNeue_400Regular
} from '@expo-google-fonts/bebas-neue'
import {
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic
} from '@expo-google-fonts/roboto'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'


firstOpen()

export default function App() {
  AsyncStorage.clear()
  let [loggedin, setLoggedin] = useState('false')
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic
  })

  useEffect(() => {
    updateState()
  })
  function updateState() {
    AsyncStorage.getItem('loggedin').then((item) => {
      setLoggedin(item)
    })
  }

  async function registerNotifications(hour, minute, i) {
    const trigger = new Date(Date.now());
    trigger.setHours(hour)
    trigger.setMinutes(minute)
    await Notifications.scheduleNotificationAsync({
      identifier: 'jam' + i,
      content: {
        title: `Jam pelajaran ke ${i} telah dimulai!`,
        body: `persiapkan buku...`,
      },
      trigger
    });
  }

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    registerNotifications(7, 2, 1)
    registerNotifications(8, 40, 2)
    registerNotifications(10, 20, 3)
    registerNotifications(21, 44, 4)

    return () => {
    }
  }, [])



  if (!fontsLoaded) {
    return <AppLoading />
  }
  else if (loggedin === 'true') {
    return (
      <Provider>
        <DrawerNavigation />
      </Provider>
    )
  } else {
    return (
      <Provider>
        <SetupScreen setLoggedin={setLoggedin} />
      </Provider>
    )
  }
}