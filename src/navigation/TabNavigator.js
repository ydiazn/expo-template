import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Center, Button, Heading, Icon } from 'native-base';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from '../screens/home';
import { NavigationHeader } from '../components/navigation';


function TabBarIcon({ route, color, size }) {
  let iconName;
  switch(route.name){
    case 'Home':
      iconName = 'home';
      break; 
    default:
      iconName = 'question';
  }

  return <Icon as={FontAwesome} name={iconName} size={size} color={color} />;
}


export function OtherTabScreen({ navigation }) {
  return (
    <Center>
      <Heading>Other tab screen</Heading>
    </Center>
  );
}


const Tab = createBottomTabNavigator();


const MainTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      header: NavigationHeader,
      tabBarIcon: props => (
        <TabBarIcon route={route} {...props} />
      )
    })}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      name="Other"
      component={OtherTabScreen}
    />
  </Tab.Navigator>
);


export default MainTabNavigator;

