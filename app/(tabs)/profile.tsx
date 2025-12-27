import { View, Text, ScrollView, Alert } from 'react-native';
import { Card, CardHeader, CardTitle, CardContent, Button } from '@mudahbisness/shared';
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
            <View className="space-y-2">
              <Button variant="outline" className="mb-2">
                Edit Profile
              </Button>
              <Button variant="outline" className="mb-2">
                Change Password
              </Button>
              <Button variant="outline">
                Privacy Settings
              </Button>
            </View>
          </CardContent>
        </Card>

        <Button variant="destructive" onPress={handleLogout}>
          Logout
        </Button>
      </View>
    </ScrollView>
  );
}
