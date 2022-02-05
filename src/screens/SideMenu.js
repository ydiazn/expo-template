
import React from 'react';
import { Button, Center, Heading } from 'native-base';


export default function SideMenuScreen({ navigation }) {
  return (
    <Center>
      <Heading>Side menu</Heading>
      <Button
        onPress={() => navigation.navigate('Home')}
      >Go to home</Button>
    </Center>
  );
}

