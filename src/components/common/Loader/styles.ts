import styled, { keyframes, css } from 'styled-components';

const spin = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

interface StyledLoaderProps {
  size: number;
}

export const StyledLoader = styled.div<StyledLoaderProps>(
  ({ theme: { colors }, size }) => ({
    display: 'inline-flex',
    height: size,
    width: size,
    borderRadius: '50%',
    border: `${size / 10}px solid ${colors.brand.primary}`,
    borderBottomColor: 'transparent',
  }),
  css`
    animation: ${spin} .5s linear infinite;
  `
);

