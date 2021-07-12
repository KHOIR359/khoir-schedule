import React, { useCallback } from 'react'
import { View, StyleSheet, Linking } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'

const facebookUrl = 'https://facebook.com/khoir359'
const whatsappUrl = 'https://wa.me/+62881024826479'

const handlePress = async (url) => {
  // Checking if the link is supported for links with custom URL scheme.
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    // by some browser in the mobile
    await Linking.openURL(url);
  } else {
    Alert.alert(`Don't know how to open this URL: ${url}`);
  }
}



export default function drawerContent(props) {
  return (
    <View style={styles.drawerContent}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userInfoImage}>
              <Avatar.Image source={require('../assets/icon.png')} size={50} />
              <View style={styles.userInfoText}>
                <Title style={styles.title}>Abdul Khoir</Title>
                <Caption style={styles.caption}>XII MIPA 1</Caption>
              </View>
            </View>

            <View style={[styles.row, { justifyContent: 'space-between', paddingRight: 15 }]}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>5</Paragraph>
                <Caption style={styles.caption}>Hari</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>15</Paragraph>
                <Caption style={styles.caption}>Pelajaran</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>210</Paragraph>
                <Caption style={styles.caption}>Menit</Caption>
              </View>
            </View>

          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              icon={({ color, size }) => (
                <MaterialIcons
                  name="home"
                  color={color}
                  size={size} />
              )}
              onPress={() => { props.navigation.navigate('Home') }} />
            <DrawerItem
              label="Profile"
              icon={({ color, size }) => (
                <MaterialIcons
                  name="face"
                  color={color}
                  size={size} />
              )}
              onPress={() => { props.navigation.navigate('User') }} />
            <DrawerItem

              label="Setting"
              icon={({ color, size }) => (
                <MaterialIcons
                  name="settings"
                  color={color}
                  size={size} />
              )}
              onPress={() => { }} />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem label="https://fb.me/khoir359" icon={({ color, size }) => (
          <MaterialIcons
            name="facebook"
            color={color}
            size={size} />
        )}
          onPress={() => {
            handlePress(facebookUrl)
          }} />
        <DrawerItem label="+62 881 0248 26479" icon={({ color, size }) => (
          <MaterialIcons
            name="phone"
            color={color}
            size={size} />
        )}
          onPress={() => {
            handlePress(whatsappUrl)
          }} />
      </Drawer.Section>
    </View >
  )
}



const styles = StyleSheet.create({
  userInfoImage: {
    flexDirection: 'row',
    marginTop: 15
  },
  userInfoText: {
    marginLeft: 15
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingTop: 10
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});