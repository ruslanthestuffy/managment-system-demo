import { FC } from 'react';

import { Label, StyledTextarea, Wrapper } from 'components/inputs/Textarea/styles';

interface TextareaProps {
  name: string;
  label: string;
  text?: string;
}

export const Textarea: FC<TextareaProps> = ({ name, label, text }) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      <StyledTextarea rows={5} name={name}>
        {text}
      </StyledTextarea>
    </Wrapper>
  );
};
