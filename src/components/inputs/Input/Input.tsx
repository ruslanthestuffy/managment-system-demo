import {
  ComponentProps,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
  MouseEventHandler,
  ReactEventHandler,
  FC,
} from 'react';

import { HideIcon, ShowIcon } from 'assets/icons';

import { Status } from 'components/inputs/Input/types';

import {
  Wrapper,
  Label,
  StyledInput,
  Icon,
  ShowPasswordButton,
  HelperText,
  PasswordIcon,
} from 'components/inputs/Input/styles';

interface InputProps extends ComponentProps<'input'> {
  icon?: FC<ComponentProps<'svg'>>;
  status?: Status;
  helperText?: string;
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, helperText, label, status = 'normal', placeholder, type, onSelect, ...props }, ref) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [caretPosition, setCaretPosition] = useState(0);

    const inputRef = useRef<HTMLInputElement>(null);
    const helperTextRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => inputRef.current!);

    const isPasswordType = type === 'password';

    const togglePasswordVisibility: MouseEventHandler<HTMLButtonElement> = e => {
      e.preventDefault();
      setIsPasswordHidden(prev => !prev);
      setTimeout(() => {
        inputRef.current?.setSelectionRange(caretPosition, caretPosition);
      }, 0);
    };

    const preventBlur: MouseEventHandler<HTMLButtonElement> = e => {
      e.preventDefault();
    };

    const interceptOnSelect: ReactEventHandler<HTMLInputElement> = e => {
      const { selectionStart } = e.target as HTMLInputElement;
      setCaretPosition(selectionStart ?? 0);
    };

    const helperTruncated = inputRef.current?.clientWidth ?? 0 < (helperTextRef.current?.scrollWidth ?? 0);

    return (
      <Wrapper status={status}>
        <StyledInput
          type={isPasswordType && isPasswordHidden ? 'password' : 'text'}
          placeholder={isPasswordType ? '********' : placeholder || ' '}
          onSelect={interceptOnSelect}
          {...props}
          ref={inputRef}
        />

        {icon && <Icon as={icon} />}
        {label && <Label>{label}</Label>}

        {isPasswordType && (
          <ShowPasswordButton
            onClick={togglePasswordVisibility}
            onMouseDown={preventBlur}
            type="button"
          >
            <PasswordIcon as={isPasswordHidden ? ShowIcon : HideIcon} />
          </ShowPasswordButton>
        )}

        {helperText && (
          <HelperText
            ref={helperTextRef}
            title={helperTruncated ? helperText : ''}
          >
            {helperText}
          </HelperText>
        )}
      </Wrapper>
    );
  },
);
