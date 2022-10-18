import styled from 'styled-components';

export const TileWrapper = styled.div(({ theme }) => ({
  padding: 30,
  width: '100%',
  borderRadius: 12,
  backgroundColor: theme.colors.white.primary,
  boxShadow: '0 0 20px rgba(0,0,0,0.05)',

  [theme.media.md]: {
    padding: 15,
  },
}));
