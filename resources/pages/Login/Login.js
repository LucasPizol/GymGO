import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import LoginForm from "./Form";
import CustomModal from "../../components/modal/Modal";
import { useEffect, useState } from "react";
import AuthProvider from "../../classes/Auth/auth.provider";

const initialField = {
  email: "",
  senha: "",
};

export default function LoginPage({ navigation }) {
  const [fields, setFields] = useState(initialField);
  const [modal, showModal] = useState(false);

  useEffect(() => {
    const user = AuthProvider.getCurrentUser();

    if (user) {
      navigation.navigate("Home");
    }
  });

  const handleLogin = async () => {
    const { email, senha } = fields;

    if (email.length === 0) {
      Alert.alert("Preencha seu email");
      return;
    }

    if (senha.length === 0) {
      Alert.alert("Preencha sua senha.");
      return;
    }
    showModal(true);

    try {
      await AuthProvider.loginUser(email, senha);
      showModal(false);

      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      {modal ? (
        <CustomModal />
      ) : (
        <View style={styles.container}>
          <View style={{ width: "100%", flex: 1 }}>
            <ImageBackground
              style={styles.image}
              source={require("../../images/login_page.jpg")}
            />
            <View style={styles.line_header}></View>
          </View>

          <View
            style={{
              ...styles.container,
              paddingHorizontal: 35,
              flex: 3,
            }}
          >
            <View>
              <Text style={styles.title}>Bem vindo de volta!</Text>
              <Text style={styles.subtitle}>
                Realize o controle do seu treino
              </Text>
            </View>

            <LoginForm fields={fields} setFields={setFields} />

            <View style={styles.authCommandsView}>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() => navigation.navigate("Register")}
              >
                <Text style={styles.registerButtonText}>CADASTRAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.accessButton}
                onPress={handleLogin}
              >
                <Text style={styles.accessButtonText}>ACESSAR</Text>
              </TouchableOpacity>
            </View>
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
    flex: 1,
    gap: 30,
  },
  image: {
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  line_header: {
    width: "100%",
    height: 8,
    backgroundColor: "#ff0000",
  },
  title: {
    fontSize: 30,
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
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
