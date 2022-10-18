import styled from 'styled-components';

export const Label = styled.label({
  display: 'flex',
  alignItems: 'center',
  gap: 5,
  fontSize: 14,
  color: 'currentColor',
  userSelect: 'none',
  cursor: 'pointer',
});

interface IndicatorProps {
  checked?: boolean;
}

export const Indicator = styled.div<IndicatorProps>(({ theme, checked }) => ({
  display: 'inline-block',
  height: 20,
  width: 20,
  background: checked ? theme.colors.brand.primary : theme.colors.white.primary,
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: checked ? theme.colors.brand.primary : theme.colors.gray.light,
  borderRadius: 4,
  marginRight: 4,

  svg: {
    width: '100%',
    height: '100%',
    color: theme.colors.white.primary,
  },
}));
