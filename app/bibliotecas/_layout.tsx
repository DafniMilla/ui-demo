import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function BibliotecasLayout() {
  return (
    <NativeBaseProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      />
    </NativeBaseProvider>
  );
}
