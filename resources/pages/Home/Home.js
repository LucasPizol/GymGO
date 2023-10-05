import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import HomeHeader from "./Header";
import Treino from "./Treino";
import { useEffect, useRef, useState } from "react";
import AuthProvider from "../../classes/Auth/auth.provider";
import firestore from "@react-native-firebase/firestore";
import { FAB } from "react-native-paper";
import UserAuthenticated from "../../classes/User/UserAuthenticated";

export default function HomePage({ navigation }) {
  const [userData, setUserData] = useState();
  const objectUser = useRef();

  useEffect(() => {
    firestore()
      .collection("Users")
      .doc(AuthProvider.getCurrentUser().uid)
      .onSnapshot((data) => {
        setUserData(data.data());
        const { nome, email, idade, peso, altura, exercises } = data.data();
        objectUser.current = new UserAuthenticated(
          nome,
          email,
          idade,
          peso,
          altura,
          exercises
        );
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader userName={objectUser.current.getNome()}/>
      <View style={styles.content}>
        <Text style={{ fontSize: 19, fontWeight: "bold" }}>
          Treino do dia - {new Date().toLocaleDateString("pt-br")}
        </Text>

        {userData?.exercises?.map((exercise, index) => (
          <Treino exercise={exercise} key={exercise._id} />
        ))}
      </View>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() =>
          navigation.navigate("NewExercise", { user: objectUser.current })
        }
        color={"#fff"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    flex: 1,
  },
  content: {
    flex: 1,
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    gap: 10,
  },
  fab: {
    position: "absolute",
    backgroundColor: "#ff0000",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
