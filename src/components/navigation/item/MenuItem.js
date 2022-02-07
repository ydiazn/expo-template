import React, {useContext} from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon, IconButton, HStack, Text } from 'native-base';
import { useTheme } from 'native-base';

import getStyles from './styles';


export default function MenuItem({screen, label, icon}){
  const styles = getStyles(useTheme());
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
    >
      <View style={styles.container}>
        <HStack style={styles.hstack}>
          {icon()}
          <Text style={styles.text}> {label} </Text>
        </HStack>
      </View>
    </TouchableOpacity>
  )
}

