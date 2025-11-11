import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function Botao() {
  return (
    <View className="flex-1 bg-gray-100 justify-center items-center">
      <TouchableOpacity
        className="bg-blue-600 active:bg-blue-700 rounded-2xl py-4 px-8 items-center justify-center shadow-lg"
        onPress={() => alert("Botão pressionado!")}
      >
        <Text className="text-white text-lg font-semibold">Clique</Text>
      </TouchableOpacity>
    </View>
  );
}
