import firestore from "@react-native-firebase/firestore";
import AuthProvider from "./auth.provider";

export default class AuthDatabase {
  static async registerNewUser(user) {
    const currentUID = AuthProvider.getCurrentUser().uid;
    await firestore().collection("Users").doc(currentUID).set(user.getUser());
  }
}
