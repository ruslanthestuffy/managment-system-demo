import styled, { CSSProperties } from 'styled-components';

interface GapContainerProps {
  gap: CSSProperties['gap'];
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  flexDirection?: CSSProperties['flexDirection'];
}

export const GapContainer = styled.div<GapContainerProps>(
  ({ gap, alignItems = 'center', justifyContent = 'flex-start', flexDirection = 'column' }) => ({
    display: 'flex',
    width: '100%',
    flexDirection,
    justifyContent,
    alignItems,
    gap,
  }),
);
