import { useState } from 'react';
import { View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import {
  TabBar,
  TabBarItem,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@mudahbisness/shared';

export default function DashboardExample() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 p-4">
        <Text className="text-2xl font-bold mb-6 mt-4">Dashboard</Text>

        <View className="gap-4 mb-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <Text className="text-3xl font-bold text-blue-600">$12,345</Text>
              <Text className="text-sm text-gray-500 mt-1">+12% from last month</Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <Text className="text-3xl font-bold text-green-600">1,234</Text>
              <Text className="text-sm text-gray-500 mt-1">+5% from last month</Text>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
              <Text className="text-3xl font-bold text-purple-600">567</Text>
              <Text className="text-sm text-gray-500 mt-1">+3 new this week</Text>
            </CardContent>
          </Card>
        </View>

        <Card className="mb-20">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="gap-4">
              <View className="flex-row items-center justify-between py-2 border-b border-gray-200">
                <View>
                  <Text className="font-medium">New order #1234</Text>
                  <Text className="text-sm text-gray-500">2 minutes ago</Text>
                </View>
                <TouchableOpacity
                  onPress={() => Alert.alert('View', 'Order #1234')}
                  className="px-3 py-2 bg-blue-600 rounded-md"
                >
                  <Text className="text-white text-sm font-medium">View</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center justify-between py-2 border-b border-gray-200">
                <View>
                  <Text className="font-medium">Product updated</Text>
                  <Text className="text-sm text-gray-500">1 hour ago</Text>
                </View>
                <TouchableOpacity
                  onPress={() => Alert.alert('View', 'Product update')}
                  className="px-3 py-2 bg-blue-600 rounded-md"
                >
                  <Text className="text-white text-sm font-medium">View</Text>
                </TouchableOpacity>
              </View>
              <View className="flex-row items-center justify-between py-2">
                <View>
                  <Text className="font-medium">New user registered</Text>
                  <Text className="text-sm text-gray-500">3 hours ago</Text>
                </View>
                <TouchableOpacity
                  onPress={() => Alert.alert('View', 'User details')}
                  className="px-3 py-2 bg-blue-600 rounded-md"
                >
                  <Text className="text-white text-sm font-medium">View</Text>
                </TouchableOpacity>
              </View>
            </View>
          </CardContent>
        </Card>
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
