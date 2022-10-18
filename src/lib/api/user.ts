import { http } from 'lib';

import { SafeUser } from 'types';

interface MeResponse {
  user: SafeUser | null;
}

interface MeRequest {
  (): Promise<SafeUser | null>;
}

export const me: MeRequest = async () => {
  const { data: { user } } = await http.get<MeResponse>('/user/me');
  return user;
}
