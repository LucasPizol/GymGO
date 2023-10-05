import firestore from "@react-native-firebase/firestore";
import AuthProvider from "../Auth/auth.provider";

export default class UserDatabase {
  static async updateUserExercises(exercises) {
    await firestore()
      .collection("Users")
      .doc(AuthProvider.getCurrentUser().uid)
      .update({ exercises: exercises });
  }

  static async getUserData() {
    return await firestore()
      .collection("Users")
      .doc(AuthProvider.getCurrentUser().uid)
      .get()
  }

}
