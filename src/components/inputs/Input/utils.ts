import { theme } from 'lib/theme';

import { Status } from 'components/inputs/Input/types';

export const statusColorMap: Record<Status, string> = {
  normal: theme.colors.gray.primary,
  warning: theme.colors.warning.primary,
  error: theme.colors.error.primary,
};

export const statusLabelColorMap: Record<Status, string> = {
  normal: theme.colors.gray.dark,
  warning: theme.colors.warning.light,
  error: theme.colors.error.light,
};

export const statusBorderColorMap: Record<Status, string> = {
  normal: theme.colors.gray.light,
  warning: theme.colors.warning.light,
  error: theme.colors.error.light,
};
