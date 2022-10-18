import { ComponentProps } from 'react';
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

interface FormProps extends ComponentProps<'form'> {}

export const Form = styled.form<FormProps>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 32,
  width: '100%',
  maxWidth: 500,
  position: 'relative',
});

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
