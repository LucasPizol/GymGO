import { StyleSheet, Text } from "react-native";
import HomePage from "./pages/Home/Home";
import CustomDrawer from "./components/drawer/Drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewExercise from "./pages/NewExercise/NewExercise";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator({ navigation }) {
  return (
    <Stack.Navigator
      drawerContent={(props) => (
        <CustomDrawer {...props} propsNavigation={navigation} />
      )}
    >
      <Stack.Screen
        name="HomePage"
        options={{
          headerShown: false,
        }}
        component={HomePage}
      />
      <Stack.Screen
        name="NewExercise"
        component={NewExercise}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
