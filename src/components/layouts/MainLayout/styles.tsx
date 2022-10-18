import styled from 'styled-components';

export const Wrapper = styled.div({
  display: 'flex',
  width: '100vw',
  minHeight: '100vh',
  position: 'relative',
});

export const MainView = styled.div(({ theme }) => ({
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: theme.colors.white.primary,
}));

export const OutletContainer = styled.main(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 30,
  width: '100%',
  height: 'calc(100vh - 60px)',
  overflowY: 'auto',
  padding: 30,

  [theme.media.md]: {
    paddingInline: 10,
    paddingBottom: 90,
  },
}));
