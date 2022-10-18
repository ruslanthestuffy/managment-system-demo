import AutosizeInput from 'react-input-autosize';

import styled from 'styled-components';

export const StyledInlineList = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const Actions = styled.div({
  display: 'inline-flex',
  gap: 5,
});

interface ActionButtonProps {
  variant: 'add' | 'cancel' | 'accept';
}

export const ActionButton = styled.button<ActionButtonProps>(({ theme, variant }) => {
  const colors = {
    add: {
      color: theme.colors.white.primary,
      background: theme.colors.black.primary,
    },
    accept: {
      color: theme.colors.success.dark,
      background: theme.colors.success.pale,
    },
    cancel: {
      color: theme.colors.error.dark,
      background: theme.colors.error.pale,
    },
  };

  return {
    color: colors[variant].color,
    background: colors[variant].background,
    border: 'none',
    borderRadius: theme.rounding.sm,
    height: 30,
    width: 30,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',

    svg: {
      height: '65%',
      width: '65%',
    },
  };
});

export const EditField = styled(AutosizeInput)(({ theme }) => ({
  '& input': {
    display: 'inline-flex',
    minWidth: 50,
    height: 14,
    fontSize: 16,
    border: 'none',
    outline: 'none',
    borderRadius: theme.rounding.sm,
    boxShadow: `0 0 0 2px ${theme.colors.gray.pale}`,
    padding: 8,
  },
}));
