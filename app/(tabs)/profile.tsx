import { View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Card, CardHeader, CardTitle, CardContent } from '@mudahbisness/shared';
import { useAuth } from '@/contexts/AuthContext';
import { router } from 'expo-router';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await signOut();
              router.replace('/(auth)/login');
            } catch (error) {
              Alert.alert('Error', 'Failed to logout');
            }
          },
          style: 'destructive',
        },
      ]
    );
  };

  return (
    <ScrollView className="flex-1 bg-gray-100">
      <View className="p-4 pt-16">
        <Text className="text-3xl font-bold mb-6">Profile</Text>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="space-y-3">
              <View>
                <Text className="text-sm text-gray-500">Email</Text>
                <Text className="text-base font-medium">{user?.email}</Text>
              </View>
              <View>
                <Text className="text-sm text-gray-500">User ID</Text>
                <Text className="text-base font-medium text-gray-700">
                  {user?.id.substring(0, 8)}...
                </Text>
              </View>
              <View>
                <Text className="text-sm text-gray-500">Created At</Text>
                <Text className="text-base font-medium text-gray-700">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
                </Text>
              </View>
            </View>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <View className="gap-2">
              <TouchableOpacity className="py-3 px-4 border border-gray-300 rounded-lg items-center mb-2">
                <Text className="text-gray-900 font-medium">Edit Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 px-4 border border-gray-300 rounded-lg items-center mb-2">
                <Text className="text-gray-900 font-medium">Change Password</Text>
              </TouchableOpacity>
              <TouchableOpacity className="py-3 px-4 border border-gray-300 rounded-lg items-center">
                <Text className="text-gray-900 font-medium">Privacy Settings</Text>
              </TouchableOpacity>
            </View>
          </CardContent>
        </Card>

        <TouchableOpacity
          onPress={handleLogout}
          className="py-3 px-6 bg-red-600 rounded-lg items-center"
        >
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
