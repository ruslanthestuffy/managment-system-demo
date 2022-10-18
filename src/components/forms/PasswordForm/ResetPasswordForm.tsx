import { FC, useState } from 'react';

import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAsyncFn } from 'react-use';

import { Form, Title, Wrapper } from 'components/forms/PasswordForm/styles';
import { PasswordFormCompleted } from 'components/forms/PasswordForm/PasswordFormCompleted';
import { Input } from 'components/inputs';
import { Button } from 'components/common';
import { LockIcon } from 'assets/icons';

import { api } from 'lib';

interface ResetPasswordValues {
  password: string;
  repeatPassword: string;
}

const resetPasswordSchema = yup.object({
  password: yup.string().required(),
  repeatPassword: yup.string().required(),
});

export interface ResetPasswordFormProps {
  resetId: string;
}

export const ResetPasswordForm: FC<ResetPasswordFormProps> = ({ resetId }) => {
  const [completed, setCompleted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<ResetPasswordValues>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const [{ loading }, resetPassword] = useAsyncFn<SubmitHandler<ResetPasswordValues>>(async ({ password }) => {
    try {
      await api.password.reset(resetId, password);
      setCompleted(true);
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (completed) return <PasswordFormCompleted />;

  return (
    <Wrapper>
      <Title>Восстановление пароля</Title>
      <Form onSubmit={handleSubmit(resetPassword)}>
        <Input
          {...register('password')}
          label="Пароль"
          icon={LockIcon}
          type="password"
          helperText={errors.password?.message}
          status={errors.password?.message ? 'error' : 'normal'}
        />
        <Input
          {...register('repeatPassword')}
          label="Подтверждение пароля"
          icon={LockIcon}
          type="password"
          helperText={errors.repeatPassword?.message}
          status={errors.repeatPassword?.message ? 'error' : 'normal'}
        />
        <Button
          fullWidth
          variant="filled"
          size="large"
          disabled={!isValid && isSubmitted}
          loading={loading}
        >
          Подтвердить
        </Button>
      </Form>
    </Wrapper>
  );
};

