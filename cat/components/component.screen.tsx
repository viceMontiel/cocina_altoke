// components/Screen.tsx
import React from 'react';
import { View, SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

export const Screen = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF9F2',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24, // Aumenta el espacio interno desde el SafeArea
    paddingBottom: 24
  },
});
