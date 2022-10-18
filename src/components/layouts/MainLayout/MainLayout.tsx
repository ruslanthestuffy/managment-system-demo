import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { SideBar } from 'components/SideBar';

import { Wrapper, MainView, OutletContainer } from 'components/layouts/MainLayout/styles';
import { Header } from 'components/Header';

export const MainLayout: FC = () => {
  return (
    <Wrapper>
      <SideBar />
      <MainView>
        <Header />
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </MainView>
    </Wrapper>
  );
};
