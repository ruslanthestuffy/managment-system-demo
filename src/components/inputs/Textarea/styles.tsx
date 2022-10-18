import styled from 'styled-components';

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

export const Label = styled.label({
  fontWeight: 700,
  fontSize: 16,
});

export const StyledTextarea = styled.textarea({
  width: '100%',
  resize: 'none',
  fontSize: 14,
});
