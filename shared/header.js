import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { resStyle } from '../global/global'
export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer()
  }
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' size={28} style={styles.icon} onPress={openMenu} />
      <View style={styles}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    color: '#eee',
    fontSize: resStyle.v20,
    letterSpacing: 1
  },
  icon: {
    color: '#eee',
    position: 'absolute',
    left: 10
  }
})
