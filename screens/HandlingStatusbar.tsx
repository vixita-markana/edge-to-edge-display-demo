import React, { useState, useEffect } from 'react';
import { View, TouchableWithoutFeedback, StatusBar, StyleSheet, Text } from 'react-native';

const HandlingStatusbar = () => {
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    StatusBar.setHidden(!navVisible, 'slide');
  }, [navVisible]);

  const toggleNav = () => {
    setNavVisible(prev => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleNav}>
      <View style={styles.container}>
        <Text style={styles.navText}>Handling Statusbar</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#c2e4ea', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  image: { flex: 1 },
  navText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
  }
});

export default HandlingStatusbar;
