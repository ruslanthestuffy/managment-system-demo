import styled from 'styled-components';

export const StyledWarningAlert = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: 16,
  fontSize: 18,
  gap: 12,
  borderRadius: 12,
  backgroundColor: theme.colors.warning.superPale,

  svg: { color: theme.colors.warning.primary },
}));
