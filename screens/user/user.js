import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, Button, TextInput, TouchableHighlight, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { resStyle } from '../../global/global';

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
    AsyncStorage.getItem('image').then((item) => {
      setImage(item);
    })
  }

  function updateProfile() {
    AsyncStorage.setItem('username', newName)
    AsyncStorage.setItem('classinfo', newClassInfo)

    updateState()
  }

  async function handleImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      AsyncStorage.setItem('image', result.uri)
      updateState()
    }
  }

  return (
    <View style={styles.background}>
      <StatusBar hidden />
      <ScrollView style={styles.scroll}>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', paddingBottom: 10, }}>
          <View style={styles.heroSection}>
            <View style={styles.heroContainer}>
              <TouchableOpacity onPress={handleImage}>
                <Image style={styles.heroImage} source={image ? { uri: image } : require('../../assets/profile.jpg')} />
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
              {/* <View style={styles.formGroup}>
                <Text style={styles.label}>Class: </Text>
                <TextInput  autoCorrect={false} placeholder='Kelas' style={styles.input}
                  onChangeText={(text) => setNewClassInfo(text)}
                  value={newClassInfo} />
              </View> */}
              <View style={styles.formGroup}>
                <TouchableHighlight onPress={updateProfile}>
                  <Text style={styles.button}>Submit</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View >
  )

}

const styles = StyleSheet.create({
  scroll: {
    width: '100%',

    paddingBottom: 10,
  },
  background: {
    flex: 1,
    display: "flex",
    paddingTop: resStyle.v20,
    alignItems: 'center',
  },
  heroSection: {
    borderRadius: resStyle.v10,
    backgroundColor: 'white',
    width: '90%',
    padding: resStyle.v5,
    elevation: 3,
    // overflow: 'hidden',
  },
  heroContainer: {

  },
  heroImage: {
    width: '100%',
    borderRadius: resStyle.v10,
    // height: 280,
    height: resStyle.h280,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  heroName: {
    fontSize: resStyle.v25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  statusText: {
    textAlign: 'center',
  },
  container: {
    width: '90%',
    marginTop: resStyle.v10,
  },
  formContainer: {
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: resStyle.v10,
    padding: resStyle.v20,
  },
  formGroup: {
    marginVertical: resStyle.v10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#ddd',
    color: '#333',
    padding: resStyle.v2,
    paddingHorizontal: resStyle.v10,
    borderRadius: resStyle.v10,
    fontSize: resStyle.v15,
    width: '100%',

  },
  label: {
    fontSize: resStyle.v18,
    marginBottom: resStyle.v10,
  },
  button: {
    padding: resStyle.v5,
    paddingHorizontal: resStyle.v10,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    borderRadius: resStyle.v10,
  }
})
export default UserScreen;