import auth from "@react-native-firebase/auth";

class AuthProvider {
  static getCurrentUser() {
    return auth().currentUser;
  }

  static async loginUser(email, password) {
    await auth().signInWithEmailAndPassword(email, password);
  }

  static async registerUser(email, password) {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  static logoutUser() {
    auth().signOut();
  }
}

export default AuthProvider;
