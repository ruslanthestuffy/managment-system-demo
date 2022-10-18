import { FC } from 'react';
import styled from 'styled-components';
import { Navigate, NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';

import { dynamicRoutes } from 'components/SideBar';

import { theme } from 'lib';

export const LinkList = styled.div(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
  gridAutoRows: '100px',
  alignItems: 'center',
  gap: 8,
  backgroundColor: theme.colors.white.primary,
  overflowY: 'auto',
  overflowX: 'hidden',
}));

export const LinkItem = styled(NavLink)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: 14,
  gap: 10,
  paddingBlock: 5,

  textDecoration: 'none',
  color: theme.colors.brand.primary,

  svg: {
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: theme.rounding['lg'],
    color: theme.colors.brand.dark,
    backgroundColor: theme.colors.brand.superPale,
  },

  span: {
    width: '100%',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));

export const MobileNavigationPage: FC = () => {
  const isMobile = useMedia(theme.breakpoints.md);

  if (!isMobile) return <Navigate to="/" replace />;

  return (
    <LinkList>
      {dynamicRoutes.map(route => (
        <LinkItem to={route.url} key={route.url}>
          {route.icon}
          <span>{route.name}</span>
        </LinkItem>
      ))}
    </LinkList>
  );
};
