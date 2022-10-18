import { FC, Fragment } from 'react';

import { GapContainer } from 'lib/styles/GapContainer';

import { TileWrapper } from 'components/TileWrapper';
import { Checkbox } from 'components/inputs';
import { Button } from 'components/common';
import { WarningAlert } from 'components/WarningAlert';
import { PageTitle, TileTitle } from 'components/Typography';

export const SettingsPage: FC = () => {
  const onButtonClick = () => {
    //logic
  };

  return (
    <Fragment>
      <PageTitle>Настройки</PageTitle>
      <WarningAlert text="Test" />
      <TileWrapper>
        <GapContainer gap={20} alignItems="start">
          <TileTitle>Уведомления</TileTitle>
          <Checkbox
            checked={false}
            onChange={() => null}
            label="Отправлять уведомления на почту"
            name="notificationBox"
          />
          <TileTitle>Пароль</TileTitle>
          <Button size="medium" variant="filled" onClick={onButtonClick}>
            Изменить пароль
          </Button>
        </GapContainer>
      </TileWrapper>
    </Fragment>
  );
};
