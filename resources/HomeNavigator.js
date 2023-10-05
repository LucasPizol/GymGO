import { StyleSheet, Text } from "react-native";
import HomePage from "./pages/Home/Home";
import Calendar from "./pages/Calendar";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./components/drawer/Drawer";
import HomeStackNavigator from "./HomeStackNavigator";

const Drawer = createDrawerNavigator();

export default function HomeNavigator({ navigation }) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawer {...props} propsNavigation={navigation} />
      )}
    >
      <Drawer.Screen
        name="Início"
        options={{
          headerTitle: () => false,
          headerStyle: {
            backgroundColor: "#ff0000",
          },
          headerTintColor: "#fff",
          headerShadowVisible: false,
          headerRight: () => (
            <Text
              style={{
                paddingRight: 20,
                color: "#fff",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              GymGO!
            </Text>
          ),
        }}
        component={HomeStackNavigator}
      />
      <Drawer.Screen name="Calendário" component={Calendar} />
    </Drawer.Navigator>
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
