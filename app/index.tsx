import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

const WelcomeScreen = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/login');
  };

  const handleLoginLink = () => {
    router.push('/login');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <Image
              source={{
                uri: 'https://storage.googleapis.com/a1aa/image/19be5afb-c39b-49ba-6f44-0b6c1f1261ce.jpg',
              }}
              style={styles.mainLogo}
            />
            <Text style={styles.welcomeTitle}>Welcome To</Text>
            <Text style={styles.welcomeSubtitle}>
              Create an account and access thousands of cool stuffs
            </Text>

            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={handleGetStarted}
            >
              <Text style={styles.getStartedButtonText}>Get Started</Text>
            </TouchableOpacity>

            <Text style={styles.loginText}>
              Do you have an account?{' '}
              <Text style={styles.loginLink} onPress={handleLoginLink}>
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
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',     // Center horizontally
    paddingHorizontal: 16,
  },
  container: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  mainLogo: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  welcomeTitle: {
    color: '#0F3C7D',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    textAlign: 'center',
    fontSize: 12,
    color: '#4B4B4B',
    lineHeight: 16,
    maxWidth: 240,
    marginBottom: 32,
  },
  getStartedButton: {
    width: '100%',
    backgroundColor: '#0F3C7D',
    paddingVertical: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  loginText: {
    fontSize: 12,
    color: '#4B4B4B',
  },
  loginLink: {
    fontWeight: '600',
    color: '#0F3C7D',
  },
});

export default WelcomeScreen;
