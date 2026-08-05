import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import {
    doc,
    getDoc,
    setDoc,
    serverTimestamp,
} from "firebase/firestore";

import { auth, googleProvider } from "../firebase/auth";
import { db } from "../firebase/config";

class AuthService {
    async loginWithGoogle () {
        const result = await signInWithPopup(auth, googleProvider);

        const user = result.user;

        const userRef = doc(db, "users", user.uid);

        const userSnap = await getDoc(userRef);

        if(!userSnap.exists()){
            await setDoc(userRef, {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                createdAt: serverTimestamp(),
            });
        }

        return user;
    }

    logout() {
        return signOut(auth);
    }

    onAuthStateChanged(callback) {
        return onAuthStateChanged(auth, callback);
    }
}

export default new AuthService();