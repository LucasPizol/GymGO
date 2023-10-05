import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import CustomModal from "../../components/modal/Modal";
import UserDatabase from "../../classes/User/UserDatabase";
import NewExerciseForm from "./Form";
import RandomNumber from "./randomNumGen";

const initialField = {
  nomeTreino: "",
  grupoMuscular: "",
  carga: "",
  series: "",
  repeticoes: "",
};

export default function NewExercise({ navigation, route }) {
  const [fields, setFields] = useState(initialField);
  const [modal, showModal] = useState(false);

  

  const handleRegister = async () => {
    const exercise = {
      ...fields,
      _id: new RandomNumber().id,
    };

    const userExercises = route.params.user.getExercises();

    try {
      await UserDatabase.updateUserExercises([...userExercises, exercise]);
    } catch (e) {
        Alert.alert("Atenção", e.message)
    }
  };

  return (
    <>
      {modal ? (
        <CustomModal />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Cadastre seu treino!</Text>

          <NewExerciseForm fields={fields} setFields={setFields} />

          <View style={styles.authCommandsView}>
            <TouchableOpacity
              style={styles.accessButton}
              onPress={handleRegister}
            >
              <Text style={styles.accessButtonText}>Adicionar</Text>
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
    paddingVertical: 45,
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
