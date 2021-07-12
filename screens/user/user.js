import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Button, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';





function UserScreen(props) {
  let [name, setName] = useState('')
  let [classInfo, setClassInfo] = useState('')
  let [newName, setNewName] = useState('')
  let [newClassInfo, setNewClassInfo] = useState('')
  let [image, setImage] = useState('')
  useEffect(() => {
    updateState()
  }, [])

  function updateState() {
    AsyncStorage.getItem('username').then((item) => {
      setName(item)
      setNewName(item)
    })
    AsyncStorage.getItem('classinfo').then((item) => {
      setClassInfo(item)
      setNewClassInfo(item)
    })
  }

  function updateProfile() {
    AsyncStorage.setItem('username', newName)
    AsyncStorage.setItem('classinfo', newClassInfo)
    updateState()
  }

  function handleImage() {

  }

  return (
    <View style={styles.background}>
      <StatusBar hidden />
      <View style={styles.heroSection}>
        <View style={styles.heroContainer}>
          <TouchableOpacity onPress={handleImage}>
            <Image style={styles.heroImage} source={image || require('../../assets/profile.jpg')} />
          </TouchableOpacity>

          <View style={styles.heroStatus}>
            <Text style={styles.heroName}>{name}</Text>
            <Text style={styles.statusText}>{classInfo}</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>

            <Text style={styles.label}>Name: </Text>
            <TextInput autoCorrect={false} placeholder='Nama' style={styles.input}
              onChangeText={(text) => setNewName(text)}
              value={newName} />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Class: </Text>
            <TextInput autoCorrect={false} placeholder='Kelas' style={styles.input}
              onChangeText={(text) => setNewClassInfo(text)}
              value={newClassInfo} />
          </View>
          <View style={styles.formGroup}>
            <TouchableHighlight onPress={updateProfile}>
              <Text style={styles.button}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View >
  )

}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    display: "flex",
    paddingTop: 20,
    alignItems: 'center',
  },
  heroSection: {
    borderRadius: 10,
    backgroundColor: 'white',
    width: '90%',
    padding: 5,
    elevation: 3,
    // overflow: 'hidden',
  },
  heroContainer: {

  },
  heroImage: {
    width: '100%',
    borderRadius: 10,
    height: 280,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  heroName: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  statusText: {
    textAlign: 'center',
  },
  container: {
    width: '90%',
    marginTop: 10,
  },
  formContainer: {
    backgroundColor: 'white',
    elevation: 3,
    padding: 20
  },
  formGroup: {
    marginVertical: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#ddd',
    padding: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '100%',

  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  button: {
    padding: 5,
    paddingHorizontal: 10,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    borderRadius: 10,
  }
})
export default UserScreen;