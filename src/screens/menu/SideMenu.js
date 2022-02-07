import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  Button,
  Container,
  Divider,
  Heading,
  Icon,
  Flex,
  useTheme,
} from 'native-base';


import { MenuItem } from '../../components/navigation';
import getStyles from './styles';


export default function SideMenuScreen({ navigation }) {
  const styles = getStyles(useTheme());

  return (
    <Flex variant="body" {...styles.container}>
      <Flex {...styles.menuContainer}>
        <MenuItem
          label="Home"
          screen="Home"
          icon={() => (<Icon as={FontAwesome} name="home" />)}
        />
        <Divider />
        <MenuItem
          label="Other screen"
          screen="StackScreen"
          icon={() => (<Icon as={FontAwesome} name="screen" />)}
        />
        <Divider />
      </Flex>
      <Button
        onPress={() => navigation.navigate('Home')}
      >Close session</Button>
    </Flex>
  )
}

