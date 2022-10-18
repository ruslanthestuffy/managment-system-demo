import styled from 'styled-components';

export const wrapperStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  listStyleType: 'none',
  gap: 12,
};

export const ArrowButton = styled.button(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 5,
  border: 'none',
  borderRadius: theme.rounding.md,
  color: theme.colors.brand.primary,
  backgroundColor: theme.colors.brand.superPale,
  cursor: 'pointer',
  transition: '0.3s',

  '&:hover': {
    backgroundColor: theme.colors.brand.pale,
  },

  '&:disabled': {
    display: 'none',
  },
}));

export const PageButton = styled.button(({ theme }) => ({
  paddingBlock: 10,
  paddingInline: 20,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: theme.colors.brand.primary,
  borderRadius: theme.rounding['sm'],
  color: theme.colors.brand.primary,
  backgroundColor: theme.colors.white.primary,
  cursor: 'pointer',
  userSelect: 'none',
  transition: '0.3s',

  '&:hover': {
    backgroundColor: theme.colors.brand.pale,
  },

  '&.current': {
    color: theme.colors.white.primary,
    backgroundColor: theme.colors.brand.primary,
  },
}));
