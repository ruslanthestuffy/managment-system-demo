import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useKey, useAsyncFn } from 'react-use';

import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { api } from 'lib';

import { Button } from 'components/common';
import { Input } from 'components/inputs';
import { RecoveryCompleted } from 'components/forms/RecoveryForm/RecoveryCompleted';

import { EmailIcon } from 'assets/icons';

import { Description, Form, GapContainer, Title, Wrapper, Actions } from 'components/forms/RecoveryForm/styles';

import * as yup from 'yup';

interface RecoveryValues {
  email: string;
}

const recoverySchema = yup.object({
  email: yup.string().email('Некорректный формат').required('Введите E-Mail'),
});

export const RecoveryForm: FC = () => {
  const [email, setEmail] = useState('');
  const [completed, setCompleted] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    setError,
    register,
  } = useForm<RecoveryValues>({
    resolver: yupResolver(recoverySchema),
  });

  const navigate = useNavigate();

  const [{ loading }, requestRecovery] = useAsyncFn<SubmitHandler<RecoveryValues>>(async ({ email }) => {
    try {
      await api.auth.recovery(email); 
      setCompleted(true);
      setEmail(email);
    } catch(err: any) {
      if (err.response.status === 404) {
        setError('email', { message: 'Пользователь не найден' });
      }
    }
  });

  const cancel = () => navigate('/login');

  useKey('Escape', cancel);

  if (completed && email) return <RecoveryCompleted email={email} />;

  return (
    <Wrapper>
      <GapContainer gap={24}>
        <Title>Восстановление пароля</Title>
        <Description>Вам отправится письмо с ссылкой для восстановления пароля</Description>
      </GapContainer>

      <Form onSubmit={handleSubmit(requestRecovery)}>
        <Input
          autoFocus
          icon={EmailIcon}
          label="Введите свой email"
          status={errors.email?.message ? 'error' : 'normal'}
          helperText={errors.email?.message}
          disabled={loading}
          {...register('email')}
        />

        <Actions>
          <Button
            type="submit"
            size="large"
            variant="filled"
            loading={loading}
          >
            <EmailIcon />
            Отправить
          </Button>
          <Button type="button" size="large" variant="normal" onClick={cancel}>
            Отмена
          </Button>
        </Actions>
      </Form>
    </Wrapper>
  );
};
