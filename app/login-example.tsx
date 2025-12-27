import { useState } from 'react';
import { View, Alert } from 'react-native';
import { LoginForm } from '@mudahbisness/shared';

export default function LoginExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError('');

    try {
      console.log('Logging in with:', email, password);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      Alert.alert('Success', `Login successful for ${email}`);
    } catch (err) {
      setError('Invalid credentials');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    Alert.alert('Info', 'Navigate to forgot password screen');
  };

  const handleSignUp = () => {
    Alert.alert('Info', 'Navigate to sign up screen');
  };

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      <LoginForm
        onSubmit={handleLogin}
        onForgotPassword={handleForgotPassword}
        onSignUp={handleSignUp}
        isLoading={isLoading}
        error={error}
      />
    </View>
  );
}
