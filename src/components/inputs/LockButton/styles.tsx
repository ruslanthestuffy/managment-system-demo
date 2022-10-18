import styled from 'styled-components';

interface IconWrapperProps {
  locked: boolean;
}

export const IconWrapper = styled.button<IconWrapperProps>(({ theme, locked }) => ({
  display: 'inline-flex',
  width: 24,
  height: 24,
  padding: 5,
  borderRadius: 4,
  backgroundColor: locked ? theme.colors.black.primary : theme.colors.gray.light,
  color: locked ? theme.colors.white.primary : theme.colors.gray.primary,
  border: 'none',
  outline: 'none',
  transition: '0.2s ease',

  '&:hover': {
    cursor: 'pointer',
  },

  '&:focus, &:focus-visible': {
    boxShadow: `0 0 0 2px ${theme.colors.focus.primary}`,
  },

  svg: {
    width: '100%',
    height: '100%',
  },
}));
