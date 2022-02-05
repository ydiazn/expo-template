import React from "react";
import { Center, Heading } from 'native-base';
import { createStackNavigator } from "@react-navigation/stack";

import MainTabNavigator from './TabNavigator.js';
import { OtherScreen } from '../screens/other';


export function StackScreen({ navigation }) {
  return (
    <Center>
      <Heading> Stack screen</Heading>
    </Center>
  );
}
const Stack = createStackNavigator();


export default function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabbar"
        options={{
          headerShown: false,
        }}
        component={MainTabNavigator}
      />
      <Stack.Screen
        name="StackScreen"
        component={StackScreen}
        options={{
          title: 'Stack screen'
        }}
      />
    </Stack.Navigator>
  );
};

