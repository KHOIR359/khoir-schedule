import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
const Stack = createStackNavigator();
import User from '../screens/user/user';
import { headerOptions } from '../global/global';


export default function UserStack(props) {

  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="User" component={User} options={({ navigation }) => { return { headerTitle: () => <Header navigation={navigation} title="Profile" /> } }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "black"
  }
})