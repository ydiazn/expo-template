import React from 'react';
import { getHeaderTitle } from '@react-navigation/elements';
import { Box, Heading, Icon, IconButton, HStack, Text } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';


const LeftButton = ({navigation, back, ...rest}) => {
  const icon = back? 'chevron-left': 'bars';
  const action = back ?
    () => navigation.goBack():
    () => navigation.navigate('SideMenu')

  return (
    <IconButton
      icon={
        <Icon as={FontAwesome} name={icon} onPress={action} />
      }
    />
  )
}


const NavigationHeader = ({navigation, route, options, back}) => {
  const title = getHeaderTitle(options, route.name);

  const { leftHeader, titleHeader, rightHeader, headerStyle } = options;
  const leftButton = <LeftButton navigation={navigation} back={back} />
  return (
    <Box bg="white" py="2">
      <HStack alignItems="center">
        <HStack alignItems="center">
          {leftHeader ? leftHeader : leftButton }
          {titleHeader ? titleHeader : <Heading size="md">{title}</Heading>}
        </HStack>
        {rightHeader && rightHeader}
      </HStack>
    </Box>
  )
}

export default NavigationHeader;

