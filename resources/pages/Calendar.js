import { View, Text, StyleSheet } from "react-native";

export default function Calendar({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Calendário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 80,
    width: "100%",
    flex: 1,
  },
});
