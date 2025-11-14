import { useState } from "react";
import { Layout, Text, Toggle, Button, IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function UiKittenDemo() {
  const [dark, setDark] = useState(false);
  const router = useRouter();

  return (
    <>
      {/* Registro de ícones do Kitten */}
      <IconRegistry icons={EvaIconsPack} />

      {/* Provider do UI Kitten, aplicado SOMENTE nesta tela */}
      <ApplicationProvider {...eva} theme={eva[dark ? "dark" : "light"]}>
        <Layout
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
          level="1"
        >
          <Text category="h4" style={{ marginBottom: 12 }}>
            UI Kitten - Tema Dinâmico
          </Text>

          <Text category="s1" style={{ marginBottom: 20 }}>
            Alterne entre Light / Dark Mode:
          </Text>

          {/* Toggle para tema */}
          <Toggle checked={dark} onChange={() => setDark(!dark)}>
            {dark ? "Modo Escuro" : "Modo Claro"}
          </Toggle>

          {/* Botão voltar */}
          <Button
            style={{ marginTop: 30, width: 200 }}
            onPress={() => router.push("/")}
          >
            Voltar
          </Button>
        </Layout>
      </ApplicationProvider>
    </>
  );
}
