const errorMessages: Record<string, string> = {
  'auth/invalid-email': 'Email is invalid!',
  'auth/wrong-password': 'Wrong password!',
  'auth/user-not-found': 'User with this email does not exist',
  'auth/weak-password': 'Password should be at least 6 characters',
  'auth/email-already-in-use': 'Email already in use',
};

export const getErrorMessages = (messageCode: string) => {
  return errorMessages[messageCode] || 'Unexpected error';
};
