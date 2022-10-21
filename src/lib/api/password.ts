import { http } from 'lib/index';

export const validateToken = async (resetId: string) => {
  try {
    await http.get(`/password-reset/validate/${resetId}`)
    return true;
  } catch {
    return false; 
  }
};

export const reset = async (resetId: string, password: string) => {
  await http.post(
    `/password-reset/reset/${resetId}`,
    { password },
  );
};
