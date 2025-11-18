import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function StickyImmersiveMode() {
  const [isImmersive, setIsImmersive] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isImmersive) {
      // Auto-hide UI after 3 seconds of inactivity
      timeout = setTimeout(() => {
        setIsImmersive(false);
      }, 3000);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isImmersive]);

  return (
    <View style={styles.container}>
      <StatusBar 
        hidden={!isImmersive} 
        style="light" 
        backgroundColor="transparent"
        translucent
      />
      <TouchableOpacity 
        style={styles.touchableArea} 
        onPress={() => setIsImmersive(!isImmersive)}
        activeOpacity={1}
      >
        <ImageBackground
          source={{ uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }}
          style={styles.background}
          resizeMode="cover"
        >
          {/* Content that extends to edges */}
          <View style={styles.fullScreenContent}>
            <Text style={styles.immersiveTitle}>Sticky Immersive Mode</Text>
            <Text style={styles.subtitle}>Tap to toggle system UI</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  immersiveTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
  },
});