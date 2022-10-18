import { ComponentProps, forwardRef, RefObject } from 'react';

import { Indicator, Label } from 'components/inputs/Checkbox/styles';

import { CheckIcon } from 'assets/icons';

interface CheckboxProps extends Omit<ComponentProps<'input'>, 'type'> {
  label: string;
}

export const Checkbox = forwardRef<RefObject<HTMLDivElement>, CheckboxProps>(
  ({ label, name, checked, ...props }, ref) => {
    return (
      <div>
        <input hidden type="checkbox" id={name} checked={checked} {...props} ref={ref as RefObject<HTMLInputElement>} />
        <Label htmlFor={name}>
          <Indicator checked={checked}>{checked && <CheckIcon />}</Indicator>
          {label}
        </Label>
      </div>
    );
  },
);
