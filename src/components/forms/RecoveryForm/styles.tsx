import styled, { CSSProperties } from 'styled-components';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: 32,
});

export const Title = styled.h2({
  fontSize: 32,
  textAlign: 'center',
});

export const Description = styled.div(({ theme }) => ({
  fontSize: 14,
  textAlign: 'center',
  color: theme.colors.gray.dark,
}));

export const Form = styled.form(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 32,
  width: '100%',
  maxWidth: 500, color: theme.colors.gray.dark,
}));

interface GapContainerProps {
  gap: CSSProperties['gap'];
  alignItems?: CSSProperties['alignItems'];
}

export const GapContainer = styled.div<GapContainerProps>(({ gap, alignItems = 'center' }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems,
  gap,
}));

export const Actions = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  gap: 20,
});
