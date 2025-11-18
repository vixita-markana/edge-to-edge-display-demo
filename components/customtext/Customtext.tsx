import React from 'react';
import { Text, View } from 'react-native';
import CustomtextStyle from './CustomtextStyle';
import { useTheme } from '../../hooks';

/**
 * The Customtext component.
 * @returns {JSX.Element} The rendered Customtext component.
 */
const Customtext = () => {
  const { styles, theme } = useTheme(CustomtextStyle);
  
  return (
    <View style={styles.container}>
      <Text>Customtext</Text>
    </View>
  );
};

export default Customtext;