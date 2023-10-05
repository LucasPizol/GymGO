import { useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";

export default function LoginForm({ fields, setFields }) {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const handleChangeField = (field, text) => {
    setFields({ ...fields, [field]: text });
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.textInput}
        label="Email"
        mode="outlined"
        onChangeText={(text) => handleChangeField("email", text)}
        left={<TextInput.Icon icon="email" />}
      />
      <TextInput
        style={styles.textInput}
        label="Senha"
        mode="outlined"
        right={
          <TextInput.Icon
            icon={hiddenPassword ? "eye" : "eye-off"}
            onPress={() => setHiddenPassword(!hiddenPassword)}
          />
        }
        secureTextEntry={hiddenPassword}
        onChangeText={(text) => handleChangeField("senha", text)}
        left={<TextInput.Icon icon="lock" />}
      />
      <TouchableOpacity>
        <Text>Esqueci minha senha</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    gap: 10,
    width: "100%",
    flex: 1,
  },

  inputView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    gap: 10,
    width: "100%",
  },
  textInput: {
    fontSize: 17,
    width: "100%",
  },
});
