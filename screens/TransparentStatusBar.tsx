import React from 'react';
import { ImageBackground, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

const TransparentStatusBar = () => {
  return (
    <View style={styles.container}>
      <ExpoStatusBar translucent backgroundColor="transparent" style="light" />
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' }}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text style={styles.title}>Transparent Status Bar</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44, // Status bar height
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add a semi-transparent layer for readability
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#eee',
  },
});


export default TransparentStatusBar;
