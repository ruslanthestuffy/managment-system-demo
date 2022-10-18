import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Wrapper, LeftSide, RightSide } from 'components/layouts/AuthLayout/styles';

import { LogoIcon } from 'assets/icons';

export const AuthLayout: FC = () => {
  return (
    <Wrapper>
      <LeftSide>
        <LogoIcon />
        <h1>Панель управления выпускниками</h1>
        <div>Ростовского-на-Дону колледжа связи и информатики</div>
      </LeftSide>
      <RightSide>
        <Outlet />
      </RightSide>
    </Wrapper>
  );
};
