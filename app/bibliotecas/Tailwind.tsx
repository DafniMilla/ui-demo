import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { useRouter } from 'expo-router';
export default function Cartao() {
  const router = useRouter();
  return (

    <View className="flex-1  bg-blue-200 justify-center items-center">

      <View className="max-w-xs bg-white shadow-lg rounded-2xl p-6 items-center">

        <Image
          className="w-24 h-24 rounded-full"
          source={{ uri: "https://picsum.photos/200" }}
        />

        <Text className="text-xl font-bold mt-4">Ana Souza</Text>

        <Text className="text-gray-600">Desenvolvedora Front-End</Text>

        <TouchableOpacity className="bg-blue-600 mt-4 px-4 py-2 rounded-lg">
          <Text className="text-white text-base">Seguir</Text>
        </TouchableOpacity>
      </View>
      <Button title="Voltar" onPress={() => router.push("/")} />
    </View>
   
  );
}
