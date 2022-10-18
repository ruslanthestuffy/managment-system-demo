import styled from 'styled-components';
import Color from 'color';

export const ModalWrapper = styled.div((({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'safe center',
  background: Color(theme.colors.black.primary).alpha(0.8).toString(),
  minHeight: '100%',
  height: 'auto',
  width: '100%',
  zIndex: 100,
  overflowY: 'auto',
  padding: '5%',
})));

export const ModalWindow = styled.div(({
  theme: { media, colors },
}) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  background: colors.white.primary,
  borderRadius: 15,
  margin: 'auto',

  [media.xs]: {
    width: '95%',
  },

  [media.sm]: {
    width: '80%', 
  },

  [media.md]: {
    width: '70%',
  },

  [media.lg]: {
    width: '60%',
  },

  [media.xl]: {
    width: '50%',
  },

  [media.xxl]: {
    width: '40%',
  },
}));

export const CloseButton = styled.button(({
  theme: { rounding, colors },
}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 4,
  border: 'none',
  borderRadius: rounding.sm,
  outline: 'none',
  transition: '.3s ease',
  cursor: 'pointer',
  background: 'transparent',
  color: colors.black.primary,
  justifySelf: 'flex-end',

  '&:hover, &:focus-visible': {
    background: Color(colors.gray.pale).alpha(0.5).toString(),
  },

  svg: {
    height: 20,
    width: 20,
  }
}));

export const ModalHeader = styled.div({
  padding: '20px 20px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const ModalTitle = styled.div({
  fontSize: 20,
  display: 'inline-flex',
});

export const ModalBody = styled.div({
  padding: '0 20px 20px',
  height: 'auto',
  flex: 1,
});

