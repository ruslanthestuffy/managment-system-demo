import styled from 'styled-components';

export const Table = styled.table({
  width: '100%',
  borderCollapse: 'collapse',
  overflow: 'hidden',
});

export const THead = styled.thead({
  position: 'sticky',
  top: 0,
});
export const TBody = styled.tbody({});

export const THeader = styled.th({
  padding: 10,
  whiteSpace: 'nowrap',
  textAlign: 'left',
  fontSize: 16,

  '&:last-child': {
    textAlign: 'right',
  },
});

export const Row = styled.tr(({ theme }) => ({
  borderBottom: `1px solid ${theme.colors.gray.light}`,

  '&:last-child': {
    border: 'none',
  },
}));

export const Column = styled.td({
  paddingBlock: 15,
  paddingInline: 10,
  whiteSpace: 'nowrap',
  fontSize: 14,

  '&:last-child': {
    paddingBottom: 0,
    textAlign: 'right',
  },

  '&:only-child': {
    paddingBlock: 15,
    paddingInline: 10,
    textAlign: 'left',
  },
});
