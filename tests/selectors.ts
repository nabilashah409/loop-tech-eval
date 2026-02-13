/**
 * Centralized selectors for the Demo App.
 * Update these if the UI changes; tests stay unchanged.
 */
export const selectors = {
  login: {
    username: '#username',
    password: '#password',
    signInButton: /sign in/i,
  },
} as const;
