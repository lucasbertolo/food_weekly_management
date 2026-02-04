/**
 * Firebase Crashlytics service stub.
 * Replace with real implementation when expo-firebase-crashlytics or similar is configured.
 */
export const FirebaseCrashlyticsService = {
  logCrashlytics: (_message: string) => {
    if (__DEV__) {
      console.debug("[Crashlytics]", _message);
    }
  },

  recordError: (_error: Error, _context?: object) => {
    if (__DEV__) {
      console.error("[Crashlytics] recordError", _error, _context);
    }
  },

  setUserIdentifier: (_userId?: string) => {
    if (__DEV__ && _userId) {
      console.debug("[Crashlytics] setUserIdentifier", _userId);
    }
  },

  crash: () => {
    if (__DEV__) {
      console.warn("[Crashlytics] crash() called - no-op in dev");
    }
    // In production, this would trigger a native crash. Not implemented.
  },
};
