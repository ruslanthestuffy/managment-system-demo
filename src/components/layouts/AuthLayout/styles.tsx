import styled from 'styled-components';

export const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  'min-height': '100vh',
  'overflow-y': 'auto',

  '@media (max-width: 920px)': {
    flexDirection: 'column',
    justifyContent: 'start',
  },
});

export const LeftSide = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '50%',
  gap: 20,
  textAlign: 'center',
  backgroundColor: theme.colors.brand.primary,
  color: theme.colors.white.primary,
  padding: '70px 20px',

  '@media (max-width: 1200px)': {
    h1: {
      fontSize: 24,
    },
  },

  '@media (max-width: 920px)': {
    flexDirection: 'row',
    width: '100%',
    textAlign: 'start',
    padding: 10,

    svg: {
      width: 50,
      height: 50,
    },

    div: {
      display: 'none',
    },
  },

  '@media (max-width: 510px)': {
    h1: {
      fontSize: 18,
    },
  },
}));

export const RightSide = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50%',
  padding: 60,

  '@media (max-width: 920px)': {
    width: '100%',
  },

  '@media (max-width: 600px)': {
    width: '100%',
    padding: '50px 20px',
  },
});
