import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AuthProvider from "../../classes/Auth/auth.provider";

export default function CustomDrawer(props) {
  const handleLogoutUser = async () => {
    AuthProvider.logoutUser();
    props.navigation.navigate("Login");
  };

  return (
    <DrawerContentScrollView>
      <View style={{ height: Dimensions.get('window').height}}>
        <View style={styles.drawerHeader}>
          <Icon
            size={100}
            name="account-circle"
            style={styles.accountPicture}
            color={"#fff"}
          />
          <Text style={styles.accountName}>Lucas</Text>
          <Text style={styles.accountEmail}>Pizol</Text>
        </View>
        <View style={{flexGrow: 1}}>
          <DrawerItemList {...props} />
        </View>
        <TouchableOpacity
          onPress={handleLogoutUser}
          style={styles.logoutButton}
        >
          <Text style={styles.logoutButtonText}>Desconectar</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 200,
    top: -5,
    width: "100%",
    backgroundColor: "#ff0000",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  accountName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 26,
  },
  accountEmail: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  logoutButton: {
    padding: 19,
  },
  logoutButtonText: {
    color: "red",
  },
});
