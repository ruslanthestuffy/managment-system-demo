import { FC, useState } from 'react';

import * as yup from 'yup';

import { Button } from 'components/common';
import { Input } from 'components/inputs';

import { LockIcon } from 'assets/icons';

import { Form, Title, Wrapper } from 'components/forms/PasswordForm/styles';
import { PasswordFormCompleted } from 'components/forms/PasswordForm/PasswordFormCompleted';
import { GapContainer } from '../LoginForm/styles';

interface PasswordFormProps {
  recovery?: boolean;
}

const newPasswordSchema = yup.object({
  password: yup.string().required(),
  newPassword: yup.string().required(),
  repeatPassword: yup.string().required(),
});

export const PasswordForm: FC<PasswordFormProps> = ({ recovery }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <Wrapper>
      <Title>Изменение пароля</Title>

      {completed ? (
        <PasswordFormCompleted />
      ) : (
        <Form onSubmit={() => null}>
          <GapContainer gap={12} alignItems="stretch">
            {!recovery && (
              <Input
                autoFocus
                icon={LockIcon}
                label="Текущий пароль"
              />
            )}
            <Input
              autoFocus={!recovery}
              icon={LockIcon}
              label="Новый пароль"
            />
            <Input
              icon={LockIcon}
              label="Подтвердите пароль"
            />
          </GapContainer>

          <Button fullWidth size="large" variant="filled">
            Подтвердить
          </Button>
        </Form>
      )}
    </Wrapper>
  );
};
