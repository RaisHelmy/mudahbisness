import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { pageConfigs } from './pages';

const { width } = Dimensions.get('window');

interface FloatingBottomNavProps {
  onPageChange?: (pageIndex: number) => void;
}

export const FloatingBottomNav: React.FC<FloatingBottomNavProps> = ({
  onPageChange,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePagePress = (index: number) => {
    setActiveIndex(index);
    onPageChange?.(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {pageConfigs.map((page, index) => {
          const isActive = activeIndex === index;
          return (
            <TouchableOpacity
              key={page.name}
              style={[
                styles.navItem,
                isActive && styles.navItemActive,
              ]}
              onPress={() => handlePagePress(index)}
              activeOpacity={0.7}
            >
              <Ionicons
                name={page.icon as any}
                size={24}
                color={isActive ? '#fff' : '#666'}
              />
              <Text
                style={[
                  styles.navText,
                  isActive && styles.navTextActive,
                ]}
              >
                {page.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  scrollView: {
    maxHeight: 70,
  },
  scrollContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    minWidth: 100,
  },
  navItemActive: {
    backgroundColor: '#007AFF',
  },
  navText: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  navTextActive: {
    color: '#fff',
  },
});
