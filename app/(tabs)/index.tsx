import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png' }}
        style={styles.logo}
      />

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>
        Explore as bibliotecas de UI e veja como elas podem transformar o design.
      </Text>

      {/* React Native Paper */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4762FC' }]}
        onPress={() => router.push('/bibliotecas/NativePaper')}
      >
        <Text style={styles.buttonText}>React Native Paper</Text>
      </TouchableOpacity>

      {/* NativeBase */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#10B981' }]}
        onPress={() => router.push('/bibliotecas/NativeBase')}
      >
        <Text style={styles.buttonText}>NativeBase</Text>
      </TouchableOpacity>

      {/* UI Kitten */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#8B5CF6' }]}
        onPress={() => router.push('/bibliotecas/uiKitten')}
      >
        <Text style={styles.buttonText}>UI Kitten</Text>
      </TouchableOpacity>

      {/* Lottie */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#F59E0B' }]}
        onPress={() => router.push('/bibliotecas/Lottie')}
      >
        <Text style={styles.buttonText}>Lottie</Text>
      </TouchableOpacity>

      {/* Tailwind */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#EAB308' }]}
        onPress={() => router.push('/bibliotecas/Tailwind')}
      >
        <Text style={styles.buttonText}>Tailwind CSS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
