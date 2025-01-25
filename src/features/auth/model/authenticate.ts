import axios from "axios";

export const authenticate = async (email: string, password: string) => {
  const { data } = await axios.post("/api/auth/login", { email, password });
  return data;
};
