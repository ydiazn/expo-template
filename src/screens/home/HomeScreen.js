import React from 'react';
import { Button, Center, Heading } from 'native-base';


export default function HomeScreen({ navigation }) {
  return (
    <Center>
      <Heading>Home screen</Heading>
      <Button
        onPress={() => navigation.navigate('StackScreen')}
      >Go to another stack screen</Button>
    </Center>
  );
}

