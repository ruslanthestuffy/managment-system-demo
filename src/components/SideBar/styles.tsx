import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.aside(({ theme }) => ({
  width: 300,
  height: '100vh',
  overflowY: 'auto',
  color: theme.colors.white.primary,
  backgroundColor: theme.colors.brand.primary,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  [theme.media.lg]: {
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20,
    paddingBlock: 20,
  },

  [theme.media.md]: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    width: 'auto',
    height: 60,
    minHeight: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    zIndex: 2,
  },
}));

export const NavigateMenu = styled.nav(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'space-between',
  gap: 8,
  width: '100%',
  padding: '0 0 40px 40px',

  [theme.media.lg]: { padding: '0 0 0 10px' },
  [theme.media.md]: {
    padding: '0 0 10px 0',
    width: 'auto',
    display: 'flex',
    flexDirection: 'row',
    gap: 25,
  },
}));

export const LogoWrapper = styled.div(({ theme }) => ({
  svg: {
    marginBlock: 50,

    [theme.media.lg]: {
      margin: '0 0 8px 0',
      width: 35,
      height: 35,
    },
  },
}));

export const Title = styled.div(({ theme }) => ({
  display: 'none',

  [theme.media.lg]: { display: 'block', fontSize: 12 },
}));

export const MenuItem = styled(NavLink)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  height: 50,
  padding: 15,
  fontSize: 14,
  width: '100%',
  fontWeight: 600,
  textDecoration: 'none',
  borderRadius: '50px 0 0 50px',
  border: 'none',
  color: theme.colors.white.primary,
  backgroundColor: 'transparent',
  zIndex: 8,

  svg: {
    width: 24,
    height: 24,
    margin: 0,
  },

  '&:before': {
    content: '""',
    position: 'absolute',
    top: -35,
    right: 0,
    width: 35,
    height: 35,
    borderRadius: 50,
    boxShadow: `15px 15px 0 ${theme.colors.brand.primary}`,
    pointerEvents: 'none',

    [theme.media.md]: {
      top: 0,
      left: -35,
      boxShadow: `15px -15px 0 ${theme.colors.brand.primary}`,
    },
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: -35,
    right: 0,
    width: 35,
    height: 35,
    borderRadius: 50,
    boxShadow: `15px -15px 0 ${theme.colors.brand.primary}`,
    pointerEvents: 'none',

    [theme.media.md]: {
      top: 0,
      right: -35,
      boxShadow: `-15px -15px 0 ${theme.colors.brand.primary}`,
    },
  },

  '&:hover, &:focus, &:focus-visible': {
    zIndex: 9,
    cursor: 'pointer',
    backgroundColor: theme.colors.brand.dark,

    '&:before': { boxShadow: `15px 15px 0 ${theme.colors.brand.dark}` },
    '&:after': { boxShadow: `15px -15px 0 ${theme.colors.brand.dark}` },

    [theme.media.md]: {
      '&:before': { boxShadow: `15px -15px 0 ${theme.colors.brand.dark}` },
      '&:after': { boxShadow: `-15px -15px 0 ${theme.colors.brand.dark}` },
    },
  },

  '&.active, &.btn.active': {
    color: theme.colors.brand.primary,
    backgroundColor: theme.colors.white.primary,
    zIndex: 10,

    '&:before': { boxShadow: `15px 15px 0 ${theme.colors.white.primary}` },
    '&:after': { boxShadow: `15px -15px 0 ${theme.colors.white.primary}` },

    '&:hover': {
      color: theme.colors.brand.primary,
      backgroundColor: theme.colors.white.primary,

      '&:before': { boxShadow: `15px 15px 0 ${theme.colors.white.primary}` },
      '&:after': { boxShadow: `15px -15px 0 ${theme.colors.white.primary}` },
    },

    [theme.media.md]: {
      '&:before': { boxShadow: `15px -15px 0 ${theme.colors.white.primary}` },
      '&:after': { boxShadow: `-15px -15px 0 ${theme.colors.white.primary}` },

      '&:hover': {
        backgroundColor: theme.colors.white.primary,

        '&:before': { boxShadow: `15px -15px 0 ${theme.colors.white.primary}` },
        '&:after': { boxShadow: `-15px -15px 0 ${theme.colors.white.primary}` },
      },
    },
  },

  '&.block-active': {
    color: theme.colors.white.primary,
    backgroundColor: theme.colors.brand.primary,
    zIndex: 9,

    '&:before': { boxShadow: `15px -15px 0 ${theme.colors.brand.primary}` },
    '&:after': { boxShadow: `-15px -15px 0 ${theme.colors.brand.primary}` },
  },

  [theme.media.lg]: {
    span: { display: 'none' },

    paddingRight: 25,
  },
  [theme.media.md]: {
    justifyContent: 'center',
    borderRadius: '0 0 50% 50%',
    width: 50,
    padding: 10,
  },
}));
