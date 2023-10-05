import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import RegisterForm from "./Form";
import { useState } from "react";
import ErrorFieldHandling from "../../classes/ErrorFieldHandling/ErrorFieldHandling";
import AuthProvider from "../../classes/Auth/auth.provider";
import User from "../../classes/User/User";
import CustomModal from "../../components/modal/Modal";
import AuthDatabase from "../../classes/Auth/auth.database";

const initialField = {
  nome: "",
  idade: "",
  altura: "",
  peso: "",
  email: "",
  senha: "",
  confirmPassword: "",
};

export default function RegisterPage({ navigation }) {
  const [fields, setFields] = useState(initialField);
  const [modal, showModal] = useState(false);

  const handleRegister = async () => {
    showModal(true);

    const { nome, idade, altura, peso, email, senha } = fields;
    console.log(AuthProvider.getCurrentUser().uid)

    try {
      ErrorFieldHandling.verifyBlankFields(fields);
      await AuthProvider.registerUser(email, senha);
      await AuthDatabase.registerNewUser(
        new User(nome, email, idade, senha, peso, altura)
      );
      showModal(false);
      navigation.navigate("Home");
    } catch (error) {
      showModal(false);

      Alert.alert(error.message);
    }
  };

  return (
    <>
      {modal ? (
        <CustomModal />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Faça seu cadastro!</Text>

          <RegisterForm fields={fields} setFields={setFields} />

          <View style={styles.authCommandsView}>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.registerButtonText}>ACESSAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.accessButton}
              onPress={handleRegister}
            >
              <Text style={styles.accessButtonText}>CADASTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 35,
    flex: 1,
  },
  title: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  subtitle: {
    fontSize: 21,
    textAlign: "center",
  },
  authCommandsView: {
    width: "100%",
    gap: 15,
    flexDirection: "row",
    paddingBottom: 30,
  },

  accessButton: {
    backgroundColor: "red",
    borderRadius: 15,
    flex: 1,
  },
  accessButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: 15,
  },
  registerButton: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 15,
    flex: 1,
  },
  registerButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 15,
  },
});
