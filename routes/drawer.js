import React from 'react';
import HomeStack from './homeStack';
import UserStack from './userStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import DrawerContent from './drawerContent';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation(props) {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => (<DrawerContent {...props} />)}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="User" component={UserStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}