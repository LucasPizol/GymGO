import { View, Text, StyleSheet } from "react-native";

export default function HomeHeader({userName}) {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Boa noite, {userName?.split(" ")[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff0000",
    justifyContent: "flex-end",
    gap: 80,
    width: "100%",
    paddingHorizontal: 35,
    paddingBottom: 20,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    maxHeight: 75,
  },
  textStyle: { color: "#fff", fontSize: 25, fontWeight: "bold" },
});
