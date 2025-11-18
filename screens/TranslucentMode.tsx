import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TranslucentMode() {
  return (
    <View style={styles.container}>
      <StatusBar 
        style={"light"}
        backgroundColor={"rgba(0,0,0,0.3)"}
        translucent={true}
      />
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.fullScreenContent}>
          <Text style={styles.title}>Translucent System Bars</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  touchableArea: {
    flex: 1,
  },
  fullScreenContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  controlsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
  },
  topControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  controlButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  controlText: {
    color: '#fff',
    fontWeight: '600',
  },
  // ... additional styles for other components
});
