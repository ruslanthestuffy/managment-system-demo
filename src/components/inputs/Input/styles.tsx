import styled from 'styled-components';
import Color from 'color';

import { Status } from 'components/inputs/Input/types';

import { statusBorderColorMap, statusColorMap } from 'components/inputs/Input/utils';

interface WrapperProps {
  status: Status;
}

export const Wrapper = styled.div<WrapperProps>(({ status, theme }) => ({
  color: statusColorMap[status],
  minWidth: 150,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  overflowX: 'hidden',

  [StyledInput]: {
    borderColor: statusBorderColorMap[status],

    [`&:-webkit-autofill,
      &:-webkit-autofill:hover, 
      &:-webkit-autofill:focus, 
      &:-webkit-autofill:active`]: {
        '-webkit-box-shadow': '0 0 0 30px white inset !important',
    },

    '&:focus': {
      outline: 'none',
      borderColor: status === 'normal' ? theme.colors.brand.primary : statusColorMap[status],

      [`& ~ ${Icon}, & ~ ${ShowPasswordButton}, & ~ ${Label}, & ~ ${HelperText}`]: {
        color: status === 'normal' ? theme.colors.brand.primary : statusColorMap[status],
      },

      '&::placeholder': {
        opacity: 1,
      },
    },

    [`&:not(:placeholder-shown) ~ ${Label}, &:focus ~ ${Label}`]: {
      transform: 'translateY(-80%)',
      fontSize: 14,
    },
  },

  [`${Icon}, ${Label}, ${HelperText}`]: {
    color: statusColorMap[status],
  },
}));

export const Icon = styled.svg({
  position: 'absolute',
  width: 24,
  height: 24,
  left: 12,
  top: 15,
  pointerEvents: 'none',
  transition: '.3s ease',
});

export const PasswordIcon = styled.svg({
  height: 24,
  width: 24,
  transition: '.3s ease',
});

export const HelperText = styled.div({
  marginTop: 6,
  marginInline: 14,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  cursor: 'default',
  transition: '.3s ease',
  fontSize: 14,
});

export const Label = styled.span(({ theme }) => ({
  position: 'absolute',
  left: 45,
  top: 21,
  fontSize: 16,
  lineHeight: '14px',
  whiteSpace: 'nowrap',
  color: theme.colors.gray.primary,
  pointerEvents: 'none',
  transition: '.3s ease',
}));

export const StyledInput = styled.input(({ theme }) => ({
  padding: '25px 45px 10px',
  width: '100%',
  transition: '0.3s',
  backgroundColor: theme.colors.white.primary,
  border: '2px solid',
  borderRadius: 12,

  '&::placeholder': {
    opacity: 0,
    transition: '.3s ease',
  },
}));

export const ShowPasswordButton = styled.button(({ theme }) => ({
  position: 'absolute',
  top: 11,
  right: 16,
  padding: 4,
  margin: 0,
  border: 'none',
  color: 'currentColor',
  background: 'transparent',
  display: 'inline-flex',
  cursor: 'pointer',
  outline: 'none',
  transition: '.3s ease',
  borderRadius: 4,

  '&:focus-visible, &:hover': {
    background: Color(theme.colors.black.light).alpha(0.1).toString(),
  },

  '&:active': {
    transition: '.1s ease',
    background: Color(theme.colors.black.light).alpha(0.2).toString(),
  },
}));

