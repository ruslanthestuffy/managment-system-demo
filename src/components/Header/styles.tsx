import styled from 'styled-components';

export const StyledHeader = styled.header(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
  height: 60,
  paddingInline: 30,
  backgroundColor: 'transparent',

  [theme.media.md]: {
    justifyContent: 'center',
    paddingInline: 10,
  },
}));

export const AlignContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  width: '65%',

  [theme.media.md]: {
    width: '100%',
  },
}));

export const UserInfo = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,

  [theme.media.md]: {
    justifyContent: 'space-between',
    width: '100%',
  },
}));

export const IconsGroup = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});
