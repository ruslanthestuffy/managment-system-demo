import styled from 'styled-components';

export const StyledLink = styled.a(({ theme }) => ({
  color: theme.colors.brand.primary,
  textDecoration: 'none',
  transition: '0.3s',

  '&:visited': {
    color: theme.colors.brand.light,
  },

  '&:hover, &:focus, &:focus-visible': {
    cursor: 'pointer',
    color: theme.colors.brand.dark,
  },
}));
