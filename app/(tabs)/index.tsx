import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


type HomeScreenProps = {
  onSelect: (screen: string) => void;
};

export default function HomeScreen({ onSelect }: HomeScreenProps) {
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

      <TouchableOpacity style={[styles.button, { backgroundColor: '#4762fcff' }]} onPress={() => onSelect('native')}>
        <Text style={styles.buttonText}>React Native Paper</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#10b981' }]} onPress={() => onSelect('native')}>
        <Text style={styles.buttonText}>NativeBase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#8b5cf6' }]} onPress={() => onSelect('kitten')}>
        <Text style={styles.buttonText}>UI Kitten</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#f59e0b' }]} onPress={() => onSelect('lottie')}>
        <Text style={styles.buttonText}>Lottie</Text>
      </TouchableOpacity>

       <TouchableOpacity style={[styles.button, { backgroundColor: '#d2f50bff' }]} onPress={() => onSelect('lottie')}>
        <Text style={styles.buttonText}>Tailwind css</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
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
    color: '#1e3a8a',
  },
  subtitle: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {

    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
