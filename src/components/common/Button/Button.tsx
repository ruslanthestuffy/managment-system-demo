import { FC, ComponentProps, forwardRef, RefObject } from 'react';

import { Loader } from 'components/common/index';
import { ButtonSize, ButtonVariant } from 'components/common/Button/types';
import { sizeMap } from 'components/common/Button/utils';

import { StyledButton } from 'components/common/Button/styles';

export interface ButtonProps extends ComponentProps<'button'> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  loading?: boolean;
  icon?: FC<ComponentProps<'svg'>>;
  fullWidth?: boolean;
}

export const Button = forwardRef<RefObject<HTMLButtonElement>, ButtonProps>(({
  icon, disabled, loading, children, size = 'medium', variant = 'normal', ...props
}, ref) => {
  return (
    <StyledButton
      disabled={loading || disabled}
      loading={loading}
      size={size}
      variant={variant}
      {...props}
      ref={ref as RefObject<HTMLButtonElement>}
    >
      {loading && <Loader size={sizeMap[size] * 0.6} />}
      {icon}
      {children}
    </StyledButton>
  );
});
