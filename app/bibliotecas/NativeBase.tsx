import { Center, Button, Text, Modal, Box } from "native-base";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function DemoNativeBase() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Center flex={1} bg="gray.100" px={6}>
      
      <Box
        bg="white"
        p={8}
        rounded="2xl"
        shadow={3}
        w="100%"
        maxW="350"
        alignItems="center"
      >
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={2}>
          Demonstração NativeBase
        </Text>

        <Text fontSize="md" color="gray.500" mb={6} textAlign="center">
          Clique no botão abaixo para abrir o modal.
        </Text>

        
        <Button w="full" onPress={() => setOpen(true)} mb={3}>
          Abrir Modal
        </Button>

        
        <Button
          w="full"
          variant="outline"
          borderColor="gray.400"
          onPress={() => router.push("/")}
        >
          Voltar
        </Button>
      </Box>

      
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header bg="primary.500">
            <Text color="white" fontWeight="bold">Aviso</Text>
          </Modal.Header>

          <Modal.Body>
            <Text fontSize="md">Boa tarde!</Text>
          </Modal.Body>

         
        </Modal.Content>
      </Modal>
    </Center>
  );
}
