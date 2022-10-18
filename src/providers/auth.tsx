import { FC, createContext } from 'react';

import { useAsyncFn, useEffectOnce } from 'react-use';
import { api } from 'lib';

import { SafeUser } from 'types';

export interface AuthContext {
  login: typeof api.auth.login;
  logout: typeof api.auth.logout;
  user: SafeUser | null;
}

export const AuthContext = createContext<AuthContext>({
  login: async () => undefined,
  logout: async () => undefined,
  user: null,
});

export const AuthProvider: FC = ({ children }) => {
  const [{ loading, value: user }, me] = useAsyncFn(api.user.me, [], { loading: true });

  const login: typeof api.auth.login = async params => {
    await api.auth.login(params);
    await me();
  };
  
  const logout: typeof api.auth.logout = async () => {
    try {
      await api.auth.logout();
      await me();
    } catch(err) {
      console.log(err);
    }
  };

  useEffectOnce(() => { me() });

  if (loading) return null;

  return (
    <AuthContext.Provider value={{
      user: user ?? null,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
