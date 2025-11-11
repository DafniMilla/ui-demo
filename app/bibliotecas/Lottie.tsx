import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';

export default function NativePaper() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

      <LottieView
      style={{width:100, height:100}}
        source={require('../../assets/images/animacao.json')}
          autoPlay
          />
      

      <Button title="Voltar" onPress={() => router.back()} />
    </View>
  );
}
