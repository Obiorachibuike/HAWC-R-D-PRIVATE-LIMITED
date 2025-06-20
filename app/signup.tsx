// app/signup.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; confirm?: string }>({});
  const router = useRouter();

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Enter a valid email';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Minimum 6 characters';

    if (confirm !== password) newErrors.confirm = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = () => {
    if (validate()) {
      Alert.alert('Sign Up Successful', 'Account created!');
      router.push('/login');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.form}>
            <Text style={styles.title}>Create Account</Text>

            <TextInput
              placeholder="Email"
              style={[styles.input, errors.email && styles.inputError]}
              placeholderTextColor="#6B7280"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              placeholder="Password"
              style={[styles.input, errors.password && styles.inputError]}
              placeholderTextColor="#6B7280"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TextInput
              placeholder="Confirm Password"
              style={[styles.input, errors.confirm && styles.inputError]}
              placeholderTextColor="#6B7280"
              secureTextEntry
              value={confirm}
              onChangeText={setConfirm}
            />
            {errors.confirm && <Text style={styles.errorText}>{errors.confirm}</Text>}

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.linkText}>
              Already have an account?{' '}
              <Text style={styles.link} onPress={() => router.push('/login')}>
                Log In
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFF' },
  scrollContainer: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  form: { width: '100%', maxWidth: 400, alignSelf: 'center' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 20, color: '#1E3A8A', textAlign: 'center' },
  input: {
    borderWidth: 1, borderColor: '#D1D9E6', borderRadius: 6,
    paddingVertical: 10, paddingHorizontal: 12, fontSize: 14,
    color: '#1F2937', marginBottom: 10,
  },
  inputError: { borderColor: 'red' },
  errorText: { color: 'red', fontSize: 12, marginBottom: 8 },
  button: {
    backgroundColor: '#1E3A8A',
    borderRadius: 6,
    paddingVertical: 12,
    marginTop: 10,
  },
  buttonText: { color: '#FFF', textAlign: 'center', fontWeight: '600', fontSize: 16 },
  linkText: { textAlign: 'center', marginTop: 20, fontSize: 13, color: '#6B7280' },
  link: { color: '#1E3A8A', fontWeight: '600' },
});

export default SignUpScreen;
