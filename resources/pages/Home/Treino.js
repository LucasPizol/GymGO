import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Treino({ exercise }) {
  const [isSwitchActive, setIsSwitchActive] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(exercise._id).then((value) => {
      setIsSwitchActive(() => (value === "true" ? true : false));
    });
  }, []);

  const toggleSwitch = () => {
    const valueToAdd = !isSwitchActive ? "true" : "false";

    AsyncStorage.setItem(exercise._id, valueToAdd);
    setIsSwitchActive(!isSwitchActive);
  };

  return (
    <View style={styles.container}>
      <View
        style={
          isSwitchActive
            ? styles.isExerciseFinished
            : { ...styles.isExerciseFinished, backgroundColor: "#ff0000" }
        }
      ></View>
      <View style={styles.exerciseContent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.exerciseName}>{exercise.nomeTreino}</Text>
          <Text style={styles.exerciseDescription}>
            {exercise.grupoMuscular}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <Text style={styles.exerciseValues}>Carga: {exercise.carga}</Text>
          <Text style={styles.exerciseValues}>
            Repetições: {exercise.repeticoes}
          </Text>
          <Text style={styles.exerciseValues}>Séries: {exercise.series}</Text>
        </View>
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity>
          <Icon name="square-edit-outline" size={30} color="#ff0000" />
        </TouchableOpacity>
        <Switch value={isSwitchActive} onTouchStart={toggleSwitch} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    height: 100,
    borderRadius: 6,
    flexDirection: "row",
    overflow: "hidden",
  },
  isExerciseFinished: {
    height: "100%",
    width: 12,
    backgroundColor: "lime",
  },
  exerciseContent: {
    paddingLeft: 15,
    paddingRight: 7,
    paddingVertical: 5,
    flex: 1,
  },
  exerciseName: {
    fontSize: 22,
    fontWeight: "bold",
  },
  exerciseDescription: {
    fontSize: 16,
  },

  exerciseValues: {
    fontSize: 10,
    fontWeight: "bold",
  },
  actionButtons: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});
