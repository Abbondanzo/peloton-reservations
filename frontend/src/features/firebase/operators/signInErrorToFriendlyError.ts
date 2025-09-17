interface FirebaseAuthError {
  code: string;
  message: string;
}

export const signInErrorToFriendlyError = (
  error: FirebaseAuthError
): string => {
  switch (error.code) {
    case "auth/user-not-found":
      return "No account found with this email address. Please check your email or create a new account.";

    case "auth/wrong-password":
      return "Incorrect password. Please try again or reset your password.";

    case "auth/invalid-email":
      return "Please enter a valid email address.";

    case "auth/user-disabled":
      return "This account has been disabled. Please contact support for assistance.";

    case "auth/too-many-requests":
      return "Too many failed login attempts. Please try again later or reset your password.";

    case "auth/weak-password":
      return "Password should be at least 6 characters long.";

    case "auth/email-already-in-use":
      return "An account with this email already exists. Please sign in instead.";

    case "auth/invalid-credential":
      return "Invalid email or password. Please check your credentials and try again.";

    case "auth/operation-not-allowed":
      return "This sign-in method is not enabled. Please contact support.";

    case "auth/account-exists-with-different-credential":
      return "An account already exists with the same email but different sign-in credentials. Please sign in using the original method.";

    case "auth/credential-already-in-use":
      return "This credential is already associated with a different user account.";

    case "auth/popup-closed-by-user":
      return "Sign-in was cancelled. Please try again.";

    case "auth/popup-blocked":
      return "Pop-up was blocked by your browser. Please allow pop-ups for this site and try again.";

    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled. Please try again.";

    case "auth/network-request-failed":
      return "Network error occurred. Please check your internet connection and try again.";

    case "auth/internal-error":
      return "An internal error occurred. Please try again later.";

    case "auth/invalid-api-key":
      return "Configuration error. Please contact support.";

    case "auth/app-deleted":
      return "Application error. Please refresh the page and try again.";

    case "auth/invalid-user-token":
      return "Your session has expired. Please sign in again.";

    case "auth/user-token-expired":
      return "Your session has expired. Please sign in again.";

    case "auth/null-user":
      return "No user is currently signed in.";

    case "auth/requires-recent-login":
      return "This operation requires recent authentication. Please sign in again.";

    default:
      // Fallback to the original error message for unknown errors
      return error.message || "An unexpected error occurred. Please try again.";
  }
};
