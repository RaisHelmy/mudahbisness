import { useState } from 'react';
import { View, Alert, Text, TouchableOpacity } from 'react-native';
import { RegisterForm } from '@mudahbisness/shared';
import { useAuth } from '../../contexts/AuthContext';
import { router } from 'expo-router';

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { signUp } = useAuth();

  const handleSignup = async (name: string, email: string, password: string) => {
    setIsLoading(true);
    setError('');

    try {
      await signUp(email, password, name);
      Alert.alert(
        'Success',
        'Account created successfully! Please check your email to verify your account.',
        [
          {
            text: 'OK',
            onPress: () => router.replace('/(auth)/login'),
          },
        ]
      );
    } catch (err: any) {
      setError(err.message || 'Failed to create account');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    router.push('/(auth)/login');
  };

  return (
    <View className="flex-1 bg-blue-50 p-4">
      <View className="flex-1 justify-center items-center max-w-md w-full mx-auto">
        <TouchableOpacity
          onPress={() => router.push('/')}
          className="self-start mb-4"
        >
          <Text className="text-blue-600 font-medium">← Back to Home</Text>
        </TouchableOpacity>
        <RegisterForm
          onSubmit={handleSignup}
          onLogin={handleLogin}
          isLoading={isLoading}
          error={error}
        />
      </View>
    </View>
  );
}
