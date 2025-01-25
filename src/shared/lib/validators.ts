export const isEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isPasswordStrong = (password: string): boolean =>
  password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password);
