import { http } from 'lib/index';

export interface LoginParams {
  emailOrId: string;
  password: string;
}

export const login = async (params: LoginParams): Promise<void> => {
  await http.post('/auth/login', params);
}

export const logout = async () => {
  await http.post('/auth/logout');
}

export const recovery = async (email: string) => {
  await http.post('/auth/recovery', { email });
};

export const resetPassword = async (password: string) => {
  await http.post('/auth/reset-password', {password});
};

