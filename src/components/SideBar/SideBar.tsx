import { FC, Fragment } from 'react';

import { useMedia } from 'react-use';

import { DotsIcon, InfoIcon, LogoIcon, PhoneIcon, SearchIcon, SettingsIcon, UserIcon } from 'assets/icons';

import { NavigateMenu, MenuItem, Wrapper, Title, LogoWrapper } from 'components/SideBar/styles';

import { theme } from 'lib';

export const dynamicRoutes = [
  {
    name: 'Студенты',
    icon: <UserIcon />,
    url: '/students',
  },
  {
    name: 'Сотрудники',
    icon: <UserIcon />,
    url: '/employees',
  },
  {
    name: 'Дипломы',
    icon: <InfoIcon />,
    url: '/diplomas',
  },
  {
    name: 'Создание группы',
    icon: <PhoneIcon />,
    url: '/group-creating',
  },
  {
    name: 'Индивидуальный перспективный план',
    icon: <UserIcon />,
    url: '/individual-development-plan',
  },
  {
    name: 'Группы',
    icon: <InfoIcon />,
    url: '/groups',
  },
  {
    name: 'Отделения',
    icon: <InfoIcon />,
    url: '/departments',
  },
];

export const SideBar: FC = () => {
  const isMobile = useMedia(theme.breakpoints.md);

  return (
    <Fragment>
      <Wrapper>
        {!isMobile && (
          <LogoWrapper>
            <LogoIcon />
            <Title>РКСИ</Title>
          </LogoWrapper>
        )}

        <NavigateMenu>
          <MenuItem to="/profile">
            <UserIcon />
            <span>Профиль</span>
          </MenuItem>
          <MenuItem as="button">
            <SearchIcon />
            <span>Поиск</span>
          </MenuItem>
          <MenuItem to="/settings">
            <SettingsIcon />
            <span>Настройки</span>
          </MenuItem>

          {isMobile ? (
            <MenuItem to="/mobile-navigation">
              <DotsIcon />
              <span>Еще</span>
            </MenuItem>
          ) : (
            dynamicRoutes.map(route => (
              <MenuItem to={route.url} key={route.url}>
                {route.icon}
                <span>{route.name}</span>
              </MenuItem>
            ))
          )}
        </NavigateMenu>
      </Wrapper>
    </Fragment>
  );
};
