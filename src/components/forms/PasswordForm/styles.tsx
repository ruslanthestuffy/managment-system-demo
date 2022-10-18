import styled from 'styled-components';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 500,
  gap: 32,
});

export const Title = styled.h2({
  fontSize: 32,
  textAlign: 'center',
});

export const Form = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 32,
  width: '100%',
  maxWidth: 500,
  color: theme.colors.gray.dark,
}));
