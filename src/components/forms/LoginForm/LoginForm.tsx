import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAsyncFn } from 'react-use';
import * as yup from 'yup';

import { Input, Checkbox } from 'components/inputs';
import { CustomLink } from 'components/CustomLink';
import { Button, LoadingOverlay } from 'components/common';

import { useAuth } from 'hooks';

import { EmailIcon, LockIcon } from 'assets/icons';

import { Description, Form, GapContainer, Title, Wrapper } from 'components/forms/LoginForm/styles';

interface LoginValues {
  emailOrId: string;
  password: string;
}

const loginSchema = yup.object({
  emailOrId: yup
    .string()
    .required('Введите E-Mail или идентификатор'),
  password: yup
    .string()
    .required('Введите пароль'),
});

export const LoginForm: FC = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isValid,
      isSubmitted,
    },
    setError,
  } = useForm<LoginValues>({
    resolver: yupResolver(loginSchema),
    reValidateMode: 'onChange',
  });

  const [{ loading }, submitLogin] = useAsyncFn<SubmitHandler<LoginValues>>(async values => {
    try {
      await login(values);
      navigate('/');
    } catch (error: any) {
      if (error.response.status === 401) {
        setError('emailOrId', { message: 'Неверный логин или пароль' });
        setError('password', { message: 'Неверный логин или пароль' });
      }
    }
  });

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(submitLogin)}>
        <GapContainer gap={24}>
          <Title>Авторизация</Title>
          <Description>Войдите в свой личный кабинет для продолжения</Description>
        </GapContainer>

        <GapContainer gap={16} alignItems="stretch">
          <Input
            autoFocus
            icon={EmailIcon}
            label="E-Mail или идентификатор"
            status={errors?.emailOrId ? 'error' : 'normal'}
            helperText={errors.emailOrId?.message}
            {...register('emailOrId')}
          />
          <Input
            icon={LockIcon}
            label="Пароль"
            type="password"
            status={errors?.password ? 'error' : 'normal'}
            helperText={errors.password?.message}
            {...register('password')}
          />
          <Checkbox
            checked={false}
            onChange={() => null}
            disabled
            label="Запомнить меня"
            name="rememberMe"
          />
        </GapContainer>

        <GapContainer gap={24}>
          <Button disabled={!isValid && isSubmitted} fullWidth size="large" variant="filled">
            Войти
          </Button>
          <CustomLink url="/recovery" label="Забыли пароль?" />
        </GapContainer>

        {loading && <LoadingOverlay />}
      </Form>
    </Wrapper>
  );
};
