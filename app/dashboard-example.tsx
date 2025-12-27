import { useState } from 'react';
import { View, Text, ScrollView, Alert, TouchableOpacity, StyleSheet } from 'react-native';
import {
  TabBar,
  TabBarItem,
} from '@mudahbisness/shared';

export default function DashboardExample() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Dashboard</Text>

        <View style={styles.statsContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Total Sales</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.statValue}>{`$12,345`}</Text>
              <Text style={styles.statChange}>+12% from last month</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Active Users</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.statValue, styles.greenText]}>1,234</Text>
              <Text style={styles.statChange}>+5% from last month</Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Products</Text>
            </View>
            <View style={styles.cardContent}>
              <Text style={[styles.statValue, styles.purpleText]}>567</Text>
              <Text style={styles.statChange}>+3 new this week</Text>
            </View>
          </View>
        </View>

        <View style={[styles.card, styles.activityCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Recent Activity</Text>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.activityList}>
              <View style={styles.activityItem}>
                <View>
                  <Text style={styles.activityTitle}>New order #1234</Text>
                  <Text style={styles.activityTime}>2 minutes ago</Text>
                </View>
                <TouchableOpacity
                  onPress={() => Alert.alert('View', 'Order #1234')}
                  style={styles.viewButton}
                >
                  <Text style={styles.viewButtonText}>View</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.activityItem}>
                <View>
                  <Text style={styles.activityTitle}>Product updated</Text>
                  <Text style={styles.activityTime}>1 hour ago</Text>
                </View>
                <TouchableOpacity
                  onPress={() => Alert.alert('View', 'Product update')}
                  style={styles.viewButton}
                >
                  <Text style={styles.viewButtonText}>View</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.activityItem, styles.activityItemLast]}>
                <View>
                  <Text style={styles.activityTitle}>New user registered</Text>
                  <Text style={styles.activityTime}>3 hours ago</Text>
                </View>
                <TouchableOpacity
                  onPress={() => Alert.alert('View', 'User details')}
                  style={styles.viewButton}
                >
                  <Text style={styles.viewButtonText}>View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <TabBar>
        <TabBarItem
          active={activeTab === 'home'}
          onPress={() => setActiveTab('home')}
          icon="🏠"
          label="Home"
        />
        <TabBarItem
          active={activeTab === 'products'}
          onPress={() => setActiveTab('products')}
          icon="📦"
          label="Products"
        />
        <TabBarItem
          active={activeTab === 'analytics'}
          onPress={() => setActiveTab('analytics')}
          icon="📊"
          label="Analytics"
        />
        <TabBarItem
          active={activeTab === 'settings'}
          onPress={() => setActiveTab('settings')}
          icon="⚙️"
          label="Settings"
        />
      </TabBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    marginTop: 16,
  },
  statsContainer: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  cardHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cardContent: {
    padding: 16,
  },
  statValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2563eb',
  },
  greenText: {
    color: '#16a34a',
  },
  purpleText: {
    color: '#9333ea',
  },
  statChange: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  activityCard: {
    marginBottom: 80,
  },
  activityList: {
    gap: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  activityItemLast: {
    borderBottomWidth: 0,
  },
  activityTitle: {
    fontWeight: '500',
    fontSize: 16,
  },
  activityTime: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  viewButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#2563eb',
    borderRadius: 6,
  },
  viewButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
});
