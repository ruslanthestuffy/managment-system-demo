import styled from 'styled-components';

import { StyledLoader } from 'components/common/Loader/styles';

import {
  createVariantBorderMap,
  createVariantBackgroundMap,
  createVariantColorMap,
  createVariantBackgroundActiveMap,
  sizeStyleMap,
} from 'components/common/Button/utils';
import { ButtonSize, ButtonVariant } from './types';

interface StyledButtonProps {
  size: ButtonSize;
  variant: ButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>(({ theme, variant, size, fullWidth, loading }) => {
  const variantBorderMap = createVariantBorderMap(theme);
  const variantColorMap = createVariantColorMap(theme);
  const variantBackgroundMap = createVariantBackgroundMap(theme);
  const variantBackgroundActiveMap = createVariantBackgroundActiveMap(theme);

  const styles = sizeStyleMap[size];
  const width = fullWidth ? '100%' : 'auto';

  return {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    verticalAlign: 'middle',
    overflow: 'hidden',
    gap: 4,
    border: variantBorderMap[variant],
    color: variantColorMap[variant],
    backgroundColor: variantBackgroundMap[variant],
    outline: 'none',
    transition: '0.3s ease',
    width,
    ...styles,

    '&:active': {
      transform: 'scale(0.9)',
    },

    '&:hover, &:focus, &:focus-visible': {
      cursor: 'pointer',
      backgroundColor: variantBackgroundActiveMap[variant],
    },

    '&[disabled]': {
      cursor: 'not-allowed',
      color: theme.colors.gray.dark,
      backgroundColor: theme.colors.gray.light,
      borderColor: 'transparent',
    },

    svg: {
      width: 24,
      height: 24,
    },

    [StyledLoader]: {
      position: 'absolute',
    },

    ...(loading ? { color: 'transparent !important' } : {}),
  };
});
