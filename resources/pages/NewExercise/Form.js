import { useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, TouchableOpacity, Text, ScrollView, View } from "react-native";

export default function NewExerciseForm({ fields, setFields }) {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const handleChangeField = (field, text) => {
    setFields({ ...fields, [field]: text });
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.textInput}
        label="Nome do treino"
        mode="outlined"
        onChangeText={(text) => handleChangeField("nomeTreino", text)}
      />
      <TextInput
        style={styles.textInput}
        label="Grupo Muscular (biceps, triceps...)"
        mode="outlined"
        onChangeText={(text) => handleChangeField("grupoMuscular", text)}
      />

      <View style={{flexDirection: 'row', gap: 2}}>
        <TextInput
          style={styles.textInput}
          label="Carga (KG)"
          mode="outlined"
          onChangeText={(text) => handleChangeField("carga", text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.textInput}
          label="Series"
          mode="outlined"
          onChangeText={(text) => handleChangeField("series", text)}
          keyboardType="numeric"

        />
        <TextInput
          style={styles.textInput}
          label="Repetições"
          mode="outlined"
          onChangeText={(text) => handleChangeField("repeticoes", text)}
          keyboardType="numeric"

        />
      </View>
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

  textInput: {
    fontSize: 17,
    flex:1,
  },
});
