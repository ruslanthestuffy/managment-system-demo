import { FC } from 'react';

import { Button } from 'components/common';

import { EmailIcon } from 'assets/icons';

import { IconWrapper, Description, Title, Wrapper, ButtonsContainer } from 'components/forms/CredentialsForm/styles';

interface CredentialsFormCompletedProps {
  email: string;
  sendEmail: () => void;
  changeEmail: () => void;
}

export const CredentialsFormCompleted: FC<CredentialsFormCompletedProps> = ({ email, sendEmail, changeEmail }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <EmailIcon />
      </IconWrapper>

      <Description>На почту {email} было отправлено письмо с ссылкой для активации вашей учетной записи</Description>

      <ButtonsContainer>
        <Button onClick={sendEmail} size="large" variant="normal">
          Отправить повторно
        </Button>
        <Button onClick={changeEmail} size="large" variant="normal">
          Изменить почту
        </Button>
      </ButtonsContainer>
    </Wrapper>
  );
};
