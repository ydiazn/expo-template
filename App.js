import React from "react";
import { extendTheme, NativeBaseProvider } from 'native-base';

import Entry from './src/navigation/';


// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};


// extend the theme
export const theme = extendTheme({ config });


export default function App() {
  return (
    <NativeBaseProvider>
      <Entry />
    </NativeBaseProvider>
  );
}

