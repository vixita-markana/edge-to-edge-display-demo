/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useState } from 'react';

export function useThemeColor(
  props?: { light?: string; dark?: string },
  colorName?: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  
  const theme = useColorScheme() ?? 'light';
  const [themeMode, setThemeMode] = useState(theme);
  console.log('themeMode', themeMode);
  //const colorFromProps = props[theme];

  // if (colorFromProps) {
  //   return colorFromProps;
  // } else {
  //   return Colors[theme][colorName];
  // }

  return {
    themeMode,
    setThemeMode
  }
}
