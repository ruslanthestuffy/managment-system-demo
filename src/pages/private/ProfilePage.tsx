import { FC, Fragment } from 'react';

import { GapContainer } from 'lib/styles/GapContainer';

import { Avatar } from 'components/Avatar';
import { FullName, PageTitle, TileSubtitle, TileTitle } from 'components/Typography';
import { TileWrapper } from 'components/TileWrapper';
import { WarningAlert } from 'components/WarningAlert';
import styled from 'styled-components';
import { theme } from 'lib';
import { useMedia } from 'react-use';

export const ProfilePage: FC = () => {
  const isTablet = useMedia(theme.breakpoints.lg);

  return (
    <Fragment>
      <PageTitle>Профиль студента</PageTitle>
      <WarningAlert text="У Вас есть незаполненная информация" />
      <TileWrapper>
        <GapContainer
          gap={20}
          alignItems={isTablet ? 'center' : 'flex-start'}
          justifyContent="space-between"
          flexDirection={isTablet ? 'column-reverse' : 'row'}
        >
          <MainInfo>
            <Group>ПОКС-44</Group>
            <GapContainer gap={20} alignItems="center" flexDirection={isTablet ? 'column-reverse' : 'row'}>
              <FullName>Руслан Джон Джонович</FullName>
              <Identifier>14/2342</Identifier>
            </GapContainer>
            <p>
              qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
              qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
              qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
              qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
            </p>
          </MainInfo>
          <Avatar
            size="large"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </GapContainer>
      </TileWrapper>

      <TileWrapper>
        <TileTitle>Адреса</TileTitle>
      </TileWrapper>

      <GapContainer gap={30} flexDirection={isTablet ? 'column' : 'row'}>
        <GapContainer gap={20}>
          <TileWrapper>
            <TileTitle>Контакты</TileTitle>
          </TileWrapper>

          <TileWrapper>
            <TileTitle>Дипломный проект</TileTitle>
          </TileWrapper>

          <TileWrapper>
            <TileTitle>Ссылки</TileTitle>
          </TileWrapper>
        </GapContainer>

        <GapContainer gap={20}>
          <TileWrapper>
            <TileTitle>Профессиональные компетенции</TileTitle>
            <TileSubtitle>Описание</TileSubtitle>
          </TileWrapper>

          <TileWrapper>
            <TileTitle>Дополнительно</TileTitle>
            <TileSubtitle>Личные качества(характеристика)</TileSubtitle>
          </TileWrapper>
        </GapContainer>
      </GapContainer>
    </Fragment>
  );
};

const MainInfo = styled.span(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 20,
  overflowWrap: 'anywhere',

  [theme.breakpoints.lg]: {
    alignItems: 'center',
  },
}));

const Group = styled.span(({ theme }) => ({
  padding: 10,
  fontSize: 18,
  fontWeight: 800,
  borderRadius: theme.rounding.sm,
  color: theme.colors.white.primary,
  backgroundColor: theme.colors.brand.primary,
  overflowWrap: 'normal',
}));

const Identifier = styled.span(({ theme }) => ({
  padding: 10,
  fontSize: 18,
  fontWeight: 500,
  borderRadius: theme.rounding.sm,
  color: theme.colors.gray.dark,
  backgroundColor: theme.colors.gray.light,
  overflowWrap: 'normal',
}));
