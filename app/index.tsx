import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect } from 'react';

export default function Landing() {
  const { user } = useAuth();

  // Redirect to tabs if already logged in
  useEffect(() => {
    if (user) {
      router.replace('/(tabs)');
    }
  }, [user]);

  return (
    <ScrollView className="flex-1 bg-blue-50">
      {/* Header */}
      <View className="bg-white shadow-sm">
        <View className="px-4 py-4 flex-row justify-between items-center">
          <Text className="text-2xl font-bold text-blue-600">MudahBisness</Text>
          <View className="flex-row gap-2">
            <TouchableOpacity
              onPress={() => router.push('/(auth)/login')}
              className="px-4 py-2 rounded-md"
            >
              <Text className="text-blue-600 font-medium">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push('/(auth)/signup')}
              className="px-4 py-2 bg-blue-600 rounded-md"
            >
              <Text className="text-white font-medium">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Hero Section */}
      <View className="px-4 py-16">
        <View className="items-center">
          <Text className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
            Welcome to{'\n'}
            <Text className="text-blue-600">MudahBisness</Text>
          </Text>
          <Text className="text-lg text-gray-600 text-center mb-8 px-4">
            Simplify your business operations with our powerful and easy-to-use platform
          </Text>
          <View className="w-full px-4 gap-3">
            <TouchableOpacity
              onPress={() => router.push('/(auth)/signup')}
              className="bg-blue-600 py-3 px-6 rounded-lg items-center"
            >
              <Text className="text-white font-semibold text-lg">Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push('/(auth)/login')}
              className="bg-white border-2 border-blue-600 py-3 px-6 rounded-lg items-center"
            >
              <Text className="text-blue-600 font-semibold text-lg">Login to Your Account</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Section */}
        <View className="mt-16 gap-4 px-4">
          <View className="bg-white p-6 rounded-lg shadow-md">
            <Text className="text-4xl text-center mb-3">📊</Text>
            <Text className="text-xl font-semibold text-center mb-2">Analytics</Text>
            <Text className="text-gray-600 text-center">
              Track your business performance with real-time analytics and insights
            </Text>
          </View>

          <View className="bg-white p-6 rounded-lg shadow-md">
            <Text className="text-4xl text-center mb-3">🚀</Text>
            <Text className="text-xl font-semibold text-center mb-2">Fast & Easy</Text>
            <Text className="text-gray-600 text-center">
              Get started in minutes with our intuitive interface and simple setup
            </Text>
          </View>

          <View className="bg-white p-6 rounded-lg shadow-md">
            <Text className="text-4xl text-center mb-3">🔒</Text>
            <Text className="text-xl font-semibold text-center mb-2">Secure</Text>
            <Text className="text-gray-600 text-center">
              Your data is protected with enterprise-grade security and encryption
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View className="bg-white mt-12 py-6">
        <Text className="text-center text-gray-500">
          © 2024 MudahBisness. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}
