import AsyncStorage from "@react-native-async-storage/async-storage"

const firstOpen = async () => {
  // AsyncStorage.clear()
  let user = await AsyncStorage.getItem('username')
  let keys = await AsyncStorage.getAllKeys()

  if (keys.length < 1) {
    await AsyncStorage.setItem('username', 'Abdul Khoir')
    await AsyncStorage.setItem('classinfo', 'XII MIPA 1')
  }

  console.log(user)
  console.log(keys)
}

module.exports = { firstOpen }