import { useState } from 'react';
import { View, Alert, Text, TouchableOpacity } from 'react-native';
import { LoginForm } from '@mudahbisness/shared';
import { useAuth } from '../../contexts/AuthContext';
import { router } from 'expo-router';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { signIn } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError('');

    try {
      await signIn(email, password);
      router.replace('/(tabs)');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Info', 'Forgot password feature coming soon!');
  };

  const handleSignUp = () => {
    router.push('/(auth)/signup');
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
        <LoginForm
          onSubmit={handleLogin}
          onForgotPassword={handleForgotPassword}
          onSignUp={handleSignUp}
          isLoading={isLoading}
          error={error}
        />
      </View>
    </View>
  );
}
