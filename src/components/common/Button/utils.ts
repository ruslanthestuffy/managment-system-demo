import { CSSProperties } from 'react';

import { ButtonVariant, ButtonSize } from 'components/common/Button/types';
import { AppTheme } from 'lib';

export const sizeMap: Record<ButtonSize, number> = {
  small: 30,
  medium: 40,
  large: 50,
};

export const sizeStyleMap: Record<ButtonSize, CSSProperties> = {
  small: {
    fontSize: 14,
    padding: '5px',
    borderRadius: 4,
    height: sizeMap.small,
  },
  medium: {
    fontSize: 16,
    padding: '10px',
    borderRadius: 8,
    height: sizeMap.medium,
  },
  large: {
    fontSize: 18,
    padding: '15px',
    borderRadius: 12,
    height: sizeMap.large,
  },
} as const;

export const createVariantColorMap = (theme: AppTheme): Record<ButtonVariant, string> => ({
  normal: theme.colors.brand.primary,
  outlined: theme.colors.brand.primary,
  filled: theme.colors.white.primary,
});

export const createVariantBackgroundMap = (theme: AppTheme): Record<ButtonVariant, string> => ({
  normal: 'transparent',
  outlined: 'transparent',
  filled: theme.colors.brand.primary,
});

export const createVariantBackgroundActiveMap = (theme: AppTheme): Record<ButtonVariant, string> => ({
  normal: theme.colors.white.dark,
  outlined: theme.colors.white.dark,
  filled: theme.colors.brand.dark,
});

export const createVariantBorderMap = (theme: AppTheme): Record<ButtonVariant, string> => ({
  normal: 'none',
  outlined: `1px solid ${theme.colors.brand.primary}`,
  filled: `1px solid ${theme.colors.brand.primary}`,
});
