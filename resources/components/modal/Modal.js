import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

export default function CustomModal() {
  return (
    <View style={styles.modal}>
      <ActivityIndicator animating={true} size={65}/>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: '100%',
    width: "100%",
    backgroundColor: "#fff",
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
