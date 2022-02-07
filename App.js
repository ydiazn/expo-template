import React from "react";
import { NativeBaseProvider } from 'native-base';

import theme from './src/theme';
import Entry from './src/navigation/';


export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Entry />
    </NativeBaseProvider>
  );
}

