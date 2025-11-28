import { useRef } from 'react';
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Lottie() {
  const animation = useRef<LottieView>(null);
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      
      <TouchableOpacity style={styles.buttonVoltar} onPress={() => router.push('/')}>
        <Ionicons name="arrow-back" size={32} color="#fff" />
      </TouchableOpacity>

     
      <LottieView
        style={styles.lottie}
        resizeMode="contain"
        source={require('../../assets/images/Heart.json')}
        autoPlay
        ref={animation}
        loop={true}
        speed={0.6}
      />

    
      {/* <View style={styles.buttonContainer}>
        <Button title="Play" onPress={() => animation.current?.play()} />
        <Button title="Pause" onPress={() => animation.current?.pause()} />
        <Button title="Reset" onPress={() => animation.current?.reset()} />
                
      </View> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  buttonVoltar:{
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10
  },

  lottie: {
    width: 140,
    height: 140,
    marginBottom: 40,
  },

  buttonContainer: {
    width: "80%",
    gap: 12,
  }
});

