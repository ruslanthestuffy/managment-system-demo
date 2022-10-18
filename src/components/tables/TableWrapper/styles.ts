import styled from 'styled-components';

export const OverflowContainer = styled.div({
  width: '100%',
  overflowY: 'auto',
});

export const TableHeader = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 10,
  flexWrap: 'wrap',
});

export const Title = styled.h4(({ theme }) => ({
  fontSize: 24,
  color: theme.colors.brand.primary,
}));
