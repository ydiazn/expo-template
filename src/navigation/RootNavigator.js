import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from './MainNavigator.js';


const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};


export default RootNavigator;

