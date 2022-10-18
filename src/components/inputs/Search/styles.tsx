import styled from 'styled-components';

export const StyledSearch = styled.input(({ theme }) => ({
  textAlign: 'center',
  width: 200,
  height: 32,
  border: 'none',
  borderRadius: 4,
  backgroundColor: theme.colors.gray.light,

  '&:focus-visible': {
    outline: 'none',
  },
}));
