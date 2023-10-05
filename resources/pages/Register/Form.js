import { useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View, ScrollView } from "react-native";

export default function RegisterForm({ fields, setFields }) {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const handleChangeField = (field, text) => {
    setFields({ ...fields, [field]: text });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.personalInfo}>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Nome"
          onChangeText={(text) => handleChangeField("nome", text)}
          value={fields.nome}
        />
      </View>
      <View style={styles.personalInfo}>
        <TextInput
          style={{...styles.textInput, flex: 1}}
          mode="outlined"
          label="Idade"
          keyboardType="numeric"
          onChangeText={(text) => handleChangeField("idade", text)}
          value={fields.idade}
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Altura (cm)"
          keyboardType="numeric"
          onChangeText={(text) => handleChangeField("altura", text)}
          value={fields.altura}
        />

        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Peso (kg)"
          keyboardType="numeric"
          onChangeText={(text) => handleChangeField("peso", text)}
          value={fields.peso}
        />
      </View>
      <TextInput
        style={styles.textInputRegister}
        mode="outlined"
        label="Email"
        onChangeText={(text) => handleChangeField("email", text)}
        value={fields.email}
      />
      <TextInput
        style={styles.textInputRegister}
        mode="outlined"
        label="Senha"
        secureTextEntry={hiddenPassword}
        onChangeText={(text) => handleChangeField("senha", text)}
        value={fields.senha}
      />

      <TextInput
        style={styles.textInputRegister}
        mode="outlined"
        label="Confirme sua senha"
        secureTextEntry={hiddenPassword}
        onChangeText={(text) => handleChangeField("confirmPassword", text)}
        value={fields.confirmPassword}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    gap: 10,
    width: "100%",
    flex: 5,
  },
  personalInfo: {
    flexDirection: "row",
    gap: 10,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 1,
    gap: 10,
  },
  textInput: {
    fontSize: 17,
    flex: 2,
  },
  textInputRegister: {
    fontSize: 17,
    width: "100%",
  },
});
