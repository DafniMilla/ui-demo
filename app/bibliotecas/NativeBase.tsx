import { Center, Button, Text, Modal, Box, Tooltip } from "native-base"; 
import { useState } from "react";
import { useRouter } from "expo-router";

export default function DemoNativeBase() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <Center flex={1} bg="gray.200" px={6}> 
      
      <Box
        bg="gray.50"  
        p={8}
        rounded="2xl"
        shadow={5}     
        w="100%"
        maxW="350"
        alignItems="center"
      >
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={2} color="primary.700">
          Demonstração NativeBase
        </Text>

        <Text fontSize="md" color="gray.600" mb={6} textAlign="center">
          Clique no botão abaixo para abrir o modal.
        </Text>

        <Button w="full" onPress={() => setOpen(true)} mb={3} colorScheme="primary">
          Abrir Modal
        </Button>

        
        {/* <Tooltip label="Clique para voltar à tela inicial" openDelay={500} mb={3}> */}
          <Button
            w="full"
            variant="outline"
            borderColor="primary.500"
            _text={{ color: "primary.700" }}
            onPress={() => router.push("/")}
          >
            Voltar
          </Button>
        {/* </Tooltip> */}

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
