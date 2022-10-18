import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components/common';

import { SuccessIcon } from 'assets/icons';

import { IconWrapper, Description } from 'components/forms/CredentialsForm/styles';

export const PasswordFormCompleted: FC = () => {
  const navigate = useNavigate();

  const continueWork = () => navigate('/login');

  return (
    <>
      <IconWrapper>
        <SuccessIcon />
      </IconWrapper>

      <Description>Ваш пароль был успешно изменен</Description>

      <Button fullWidth size="large" variant="filled" onClick={continueWork}>
        Продолжить работу
      </Button>
    </>
  );
};
