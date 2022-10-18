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

export const ButtonsContainer = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: 10,
}));

export const IconWrapper = styled.div(({ theme }) => ({
  width: 65,
  height: 65,
  padding: 15,
  borderRadius: 50,
  backgroundColor: theme.colors.brand.primary,

  svg: {
    width: '100%',
    height: '100%',
    color: theme.colors.white.primary,
  },
}));

export const Form = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: 32,
  width: '100%',
  maxWidth: 500,
  color: theme.colors.gray.dark,
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
