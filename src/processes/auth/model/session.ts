export const getSession = () => {
  const session = localStorage.getItem("session");
  return session ? JSON.parse(session) : null;
};

export const setSession = (session: any) => {
  localStorage.setItem("session", JSON.stringify(session));
};
