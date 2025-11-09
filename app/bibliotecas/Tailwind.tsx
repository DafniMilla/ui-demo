import { View, Text, Pressable } from "react-native";
import '../../styles/global.css'; // seu CSS Tailwind

export default function TailwindButtonDemo() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Pressable
        className="bg-blue-600 px-6 py-3 rounded-full shadow-lg"
        onPress={() => alert("Botão pressionado!")}
      >
        <Text className="text-white font-bold text-lg">
          Clique Aqui
        </Text>
      </Pressable>
    </View>
  );
}
