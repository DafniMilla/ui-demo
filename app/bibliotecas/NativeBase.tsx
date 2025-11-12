import React from 'react';
import { NativeBaseProvider, VStack, Heading, Text, Input, Button, Icon, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export default function NativeBaseExample() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <NativeBaseProvider>
      <Box bg="blue.200" p={5} mt={10}>
  <Text>Teste NativeBase</Text>
</Box>
      <VStack space={4} p={5} alignItems="center">
        <Heading size="lg">Confirm your password</Heading>
        <Text>johnsmith@gmail.com</Text>

        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter password"
          InputRightElement={
            <Button
              size="xs"
              rounded="none"
              onPress={() => setShowPassword(!showPassword)}>
              <Icon as={MaterialIcons} name={showPassword ? 'visibility' : 'visibility-off'} />
            </Button>
          }
        />

        <Button colorScheme="primary" w="100%">
          Confirm
        </Button>
      </VStack>
    </NativeBaseProvider>
  );
}
