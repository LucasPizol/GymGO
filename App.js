import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import LoginPage from "./resources/pages/Login/Login";
import RegisterPage from "./resources/pages/Register/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import HomeNavigator from "./resources/HomeNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={LoginPage}
          />

          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeNavigator}
          />

          <Stack.Screen
            name="Register"
            options={{
              headerShown: false,
            }}
            component={RegisterPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
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
