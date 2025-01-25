import { getSession } from "../model/session";

export const checkAuth = () => {
  const session = getSession();
  return session && session.token ? true : false;
};
