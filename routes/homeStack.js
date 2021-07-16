
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import DetailScreen from '../screens/main/detail';
import { headerOptions } from '../global/global';


const Stack = createStackNavigator();
import Main from '../screens/main/main';

export default function HomeStack(props) {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Home" component={Main} options={({ navigation }) => { return { headerTitle: () => <Header navigation={navigation} title="Home" /> } }} />
      <Stack.Screen name="SubjectDetail" component={DetailScreen} options={({ navigation }) => { return { headerTitle: () => <Header navigation={navigation} title="Detail" /> } }} />
    </Stack.Navigator>
  );
}