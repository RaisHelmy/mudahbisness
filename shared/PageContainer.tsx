import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FloatingBottomNav } from './FloatingBottomNav';
import { pageConfigs } from './pages';

export const PageContainer: React.FC = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const CurrentPage = pageConfigs[currentPageIndex].component;

  return (
    <View style={styles.container}>
      <View style={styles.pageContent}>
        <CurrentPage />
      </View>
      <FloatingBottomNav onPageChange={setCurrentPageIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageContent: {
    flex: 1,
  },
});
