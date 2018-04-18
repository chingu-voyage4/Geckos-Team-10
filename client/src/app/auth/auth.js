import decode from "jwt-decode";

export const checkAuth = () => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  if (!token || !refreshToken) {
    return false;
  }

  try {
    const { exp } = decode(refreshToken);

    if (exp < new Date().getTime() / 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};
