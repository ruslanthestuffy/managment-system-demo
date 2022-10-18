import { useContext } from 'react';

import { AuthContext } from 'providers';

interface UseAuth {
  (): AuthContext;
}

export const useAuth: UseAuth = () => {
  return useContext(AuthContext);
};

