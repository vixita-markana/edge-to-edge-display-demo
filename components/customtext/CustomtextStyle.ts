import { StyleSheet } from 'react-native';
import { ThemeMode } from '../../theme';

/**
 * @returns A custom style sheet that can be injected into the component.
 */ 
const styles = (theme: ThemeMode) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    }
  });

export default styles;
