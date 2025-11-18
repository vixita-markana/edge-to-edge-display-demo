import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LeanBackMode() {
  const [showSystemUI, setShowSystemUI] = useState(true);
  const hideTimer = useRef<NodeJS.Timeout>();

  const resetHideTimer = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    setShowSystemUI(true);
    hideTimer.current = setTimeout(() => {
      setShowSystemUI(false);
    }, 2000); // Hide after 2 seconds of inactivity
  };

  useEffect(() => {
    // Initially hide system UI after component mounts
    const initialTimer = setTimeout(() => {
      setShowSystemUI(false);
    }, 1000);

    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      clearTimeout(initialTimer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar 
        hidden={!showSystemUI} 
        style="light" 
        backgroundColor="transparent"
        translucent
      />
      
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4' }}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView 
          style={styles.scrollContent}
          contentContainerStyle={styles.contentContainer}
          onScrollBeginDrag={resetHideTimer}
          onTouchStart={resetHideTimer}
          onTouchMove={resetHideTimer}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={styles.headerSection}>
            <Text style={styles.title}>Lean Back Mode</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1
  },
  headerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
});