function useTokenStore() {
  const TOKEN_KEY = "@pokeStoreToken";

  const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
  
  const getUserToken = () => localStorage.getItem(TOKEN_KEY);
  
  const userLogin = token => localStorage.setItem(TOKEN_KEY, token);
  
  const userLogout = () => localStorage.removeItem(TOKEN_KEY);

  return {
    TOKEN_KEY,
    isAuthenticated,
    getUserToken,
    userLogin,
    userLogout,
  }
}

export default useTokenStore;