import { onAuthStateChanged, reload, User } from "firebase/auth";
import { useCallback, useEffect, useState } from "react";
import { auth } from "../firebase-config";

export const useFirebaseSession = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>();

  const reloadUser = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) return;

    await reload(currentUser);

    const newUser = auth.currentUser;

    if (!newUser) return;

    setUser(newUser);
  };

  const checkAuthStatus = useCallback(async () => {
    const currentUser = auth.currentUser;

    if (currentUser) setUser(currentUser);

    if (initializing) setInitializing(false);
  }, [initializing]);

  useEffect(() => {
    checkAuthStatus();

    const unsubscribe = onAuthStateChanged(auth, (newUser) => {
      setUser(newUser);
      if (initializing) setInitializing(false);
    });

    return unsubscribe;
  }, [initializing, user, checkAuthStatus]);

  return { user, initializing, reloadUser };
};
