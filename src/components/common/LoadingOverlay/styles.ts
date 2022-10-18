import styled from 'styled-components';
import Color from 'color';

export const LoadingContainer = styled.div(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: Color(theme.colors.white.primary).alpha(0.5).toString(),
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
}));
