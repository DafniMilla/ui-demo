import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';


export default function Lottie() {
  const router = useRouter();

  return (

    <View style={{ flex: 1,backgroundColor: '#0f172a',justifyContent: 'center', alignItems: 'center' }}>

      <LottieView
      style={{width:80, height:80 , position: 'absolute', top: 60 }}
        source={require('../../assets/images/animacao.json')}
          autoPlay
          />
      

      <Button title="Voltar" onPress={() => router.push('/')} />
    </View>
  );
}
