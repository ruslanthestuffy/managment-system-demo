import styled from 'styled-components';

export const PageTitle = styled.div(({ theme }) => ({
  fontSize: 30,
  fontWeight: 800,

  [theme.media.md]: {
    textAlign: 'center',
  },
}));

export const FullName = styled.div({
  fontSize: 30,
  fontWeight: 800,
});

export const TileTitle = styled.h3({
  fontSize: 24,
  fontWeight: 800,
});

export const TileSubtitle = styled.h4({
  fontSize: 14,
  fontWeight: 800,
});
