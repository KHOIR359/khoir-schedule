import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableHighlight } from 'react-native'
import { resStyle } from '../../global/global';
import { Picker } from '@react-native-picker/picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

export default function SetupScreen({ setLoggedin }) {
  const [name, setName] = useState('')
  const [kelas, setKelas] = useState('')

  function submitData() {
    if (name && kelas) {
      console.log(name)
      console.log(kelas)
      AsyncStorage.setItem('username', name)
      AsyncStorage.setItem('classinfo', kelas)
      AsyncStorage.setItem('loggedin', 'true')
      setLoggedin('true')
    }
  }
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar style="light" />
      <View style={styles.mainContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Data Diri</Text>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Kelas</Text>
            <View style={styles.select}>
              <Picker
                style={styles.kelasInput}
                selectedValue={kelas}
                onValueChange={(itemValue, itemIndex) =>
                  setKelas(itemValue)
                }>
                <Picker.Item style={styles.kelasText} label="Kelas" value="0" />
                <Picker.Item style={styles.kelasText} label="X IPS 1" value="X IPS 1" />
                <Picker.Item style={styles.kelasText} label="X IPS 2" value="X IPS 2" />
                <Picker.Item style={styles.kelasText} label="X IPS 3" value="X IPS 3" />
                <Picker.Item style={styles.kelasText} label="X MIPA 1" value="X MIPA 1" />
                <Picker.Item style={styles.kelasText} label="X MIPA 2" value="X MIPA 2" />
                <Picker.Item style={styles.kelasText} label="XI IPS 1" value="XI IPS 1" />
                <Picker.Item style={styles.kelasText} label="XI IPS 2" value="XI IPS 2" />
                <Picker.Item style={styles.kelasText} label="XI IPS 3" value="XI IPS 3" />
                <Picker.Item style={styles.kelasText} label="XI MIPA 1" value="XI MIPA 1" />
                <Picker.Item style={styles.kelasText} label="XI MIPA 2" value="XI MIPA 2" />
                <Picker.Item style={styles.kelasText} label="XII IPS 1" value="XII IPS 1" />
                <Picker.Item style={styles.kelasText} label="XII IPS 2" value="XII IPS 2" />
                <Picker.Item style={styles.kelasText} label="XII IPS 3" value="XII IPS 3" />
                <Picker.Item style={styles.kelasText} label="XII MIPA 1" value="XII MIPA 1" />
                <Picker.Item style={styles.kelasText} label="XII MIPA 2" value="XII MIPA 2" />
              </Picker>
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Nama</Text>
            <TextInput style={styles.input} onChangeText={(text) => setName(text)} placeholder='cth: Abdul Khoir' />
          </View>
          <TouchableHighlight style={styles.button} onPress={submitData}>
            <Text style={styles.buttonText} >Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#0277df',
    height: '100%',
    alignItems: 'center',
    paddingTop: resStyle.h280,
  },
  formContainer: {
    width: '50%'
  },
  title: {
    fontSize: resStyle.v40,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'BebasNeue_400Regular'
  },
  label: {
    fontSize: resStyle.v20,
    color: 'white',
    textAlign: 'left',
    fontFamily: 'Roboto_500Medium',
    marginBottom: resStyle.v2
  },
  select: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: resStyle.v2,
    paddingHorizontal: resStyle.v5,
  },
  formGroup: {
    marginVertical: resStyle.v5
  },
  kelasInput: {
    backgroundColor: 'white',
  },
  kelasText: {
    color: '#333',
    fontFamily: 'Roboto_400Regular'
  },
  input: {
    backgroundColor: 'white',
    color: '#333',
    borderRadius: 5,
    paddingHorizontal: resStyle.v10,
    paddingVertical: resStyle.v2
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: resStyle.v15
  },
  button: {
    backgroundColor: '#349530',
    alignSelf: 'stretch',
    paddingVertical: resStyle.v5,
    borderRadius: 10,
    marginTop: resStyle.v5
  }
})
