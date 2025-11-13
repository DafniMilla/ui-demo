import { router } from 'expo-router';
import * as React from 'react';
import { View } from 'react-native';
import { Appbar, Button, Text, TextInput } from 'react-native-paper';

const MyComponent = () => (
  <>
    <Appbar.Header>
      <Appbar.BackAction onPress={() => router.back()} />
      <Appbar.Content title="Voltar" />
    </Appbar.Header>

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 24 }}>
        Login
      </Text>

      <TextInput
        label="Email"
        mode="outlined"
        left={<TextInput.Icon icon="at" color="black" />}
        style={{ width: '85%', marginBottom: 16 }}
      />

      <TextInput
        label="Senha"
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon icon="lock" color="black" />}
        style={{ width: '85%', marginBottom: 24 }}
      />

      <Button
        mode="contained"
        style={{ width: '85%', borderRadius: 8 }}
        onPress={() => console.log('Entrar')}
      >
        Entrar
      </Button>
    </View>
  </>
);

export default MyComponent;
