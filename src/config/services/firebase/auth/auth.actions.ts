import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { formatFirebaseAuthError } from "./helper";

type FirebaseError = Error & {
  code: string;
};

export class FirebaseAuthService implements Auth.Actions {
  private lastVerificationEmailSent: number | null = null;
  private emailCooldown = 60 * 1000;

  async signIn(username: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(auth, username, password);
    } catch (error) {
      const firebaseError = error as FirebaseError;

      if (firebaseError) {
        throw new Error(formatFirebaseAuthError(firebaseError.code));
      }

      throw error;
    }
  }

  async signOut(): Promise<void> {
    try {
      await signOut(auth);
    } catch (error) {
      const firebaseError = error as FirebaseError;

      if (firebaseError) {
        throw new Error(formatFirebaseAuthError(firebaseError.code));
      }

      throw error;
    }
  }

  registerUser = async ({
    email,
    password,
    displayName,
  }: Auth.RegisterUser) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredentials.user, { displayName });

      await this.sendEmailVerification();
    } catch (error) {
      const firebaseError = error as FirebaseError;

      if (firebaseError) {
        throw new Error(formatFirebaseAuthError(firebaseError.code));
      }

      throw error;
    }
  };

  sendEmailVerification = async () => {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("Ocorreu um problema.");
    }

    if (user.emailVerified) {
      throw new Error("Email já verificado.");
    }

    const currentTime = Date.now();

    if (
      this.lastVerificationEmailSent &&
      currentTime - this.lastVerificationEmailSent < this.emailCooldown
    ) {
      const secondsRemaining = Math.ceil(
        (this.emailCooldown - (currentTime - this.lastVerificationEmailSent)) /
          1000
      );

      throw new Error(
        `Por favor, aguarde ${secondsRemaining} segundos antes de tentar novamente`
      );
    }

    await sendEmailVerification(user);

    this.lastVerificationEmailSent = Date.now();
  };

  resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      const firebaseError = error as FirebaseError;

      if (firebaseError) {
        throw new Error(formatFirebaseAuthError(firebaseError.code));
      }

      throw error;
    }
  };
}
