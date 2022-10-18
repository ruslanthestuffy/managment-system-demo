import { FC } from 'react';

export interface RecoveryCompletedProps {
  email: string;
}

export const RecoveryCompleted: FC<RecoveryCompletedProps> = ({ email }) => {
  return (
    <div>Письмо для восстановления пароля отправлено на <b>{email}</b></div> 
  );
};

