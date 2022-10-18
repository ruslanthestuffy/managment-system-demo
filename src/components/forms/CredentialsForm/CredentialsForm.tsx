import { ChangeEventHandler, FC, SyntheticEvent, useState } from 'react';

import { Button } from 'components/common';
import { Input } from 'components/inputs';

import { EmailIcon, LockIcon } from 'assets/icons';

import { Form, GapContainer, Title, Wrapper } from 'components/forms/CredentialsForm/styles';

import { CredentialsFormCompleted } from 'components/forms/CredentialsForm/CredentialsFormCompleted';

export const CredentialsForm: FC = () => {
  const [email, setEmail] = useState('');
  const [completed, setCompleted] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [repeatPasswordValue, setRepeatPasswordValue] = useState('');

  const emailChangeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setEmail(value);
  };

  const passwordChangeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setPasswordValue(value);
  };

  const repeatPasswordChangeHandler: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    setRepeatPasswordValue(value);
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    setCompleted(true);
    sendEmail();
  };

  const sendEmail = () => {
    alert('email sent');
  };

  const changeEmail = () => {
    setEmail('');
    setPasswordValue('');
    setRepeatPasswordValue('');
    setCompleted(false);
  };

  return (
    <>
      {completed ? (
        <CredentialsFormCompleted email={email} sendEmail={sendEmail} changeEmail={changeEmail} />
      ) : (
        <Wrapper>
          <Title>Заполнение данных</Title>

          <Form onSubmit={submitHandler}>
            <GapContainer gap={12} alignItems="stretch">
              <Input
                autoFocus
                icon={EmailIcon}
                label="Введите свой email или идентификатор"
                value={email}
                onChange={emailChangeHandler}
              />
              <Input
                icon={LockIcon}
                label="Введите пароль"
                type="password"
                value={passwordValue}
                onChange={passwordChangeHandler}
              />
              <Input
                icon={LockIcon}
                label="Введите пароль еще раз"
                type="password"
                value={repeatPasswordValue}
                onChange={repeatPasswordChangeHandler}
              />
            </GapContainer>

            <Button fullWidth size="large" variant="filled">
              Подтвердить
            </Button>
          </Form>
        </Wrapper>
      )}
    </>
  );
};
