import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const AdvancedEdgeToEdge = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden={true} backgroundColor="transparent" />
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.mainView}>
          <Text style={styles.title}>Edge to Edge</Text>
        </View>
        </ImageBackground>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AdvancedEdgeToEdge;