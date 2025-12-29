import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Landing Page</Text>
      <Text style={styles.description}>Welcome to our app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export const landingConfig = {
  name: 'landing',
  title: 'Home',
  icon: 'home',
  component: LandingPage,
};
