import { firebaseAuth } from "../firebase/firebase";

export const login = (email, password) => {
  return firebaseAuth.signInWithEmailAndPassword(email, password);
};
