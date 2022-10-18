import { AlertIcon } from 'assets/icons';
import { StyledWarningAlert } from 'components/WarningAlert/styles';

interface WarningAlertProps {
  text: string;
}

export const WarningAlert = ({ text }: WarningAlertProps) => {
  return (
    <StyledWarningAlert>
      <AlertIcon />
      {text}
    </StyledWarningAlert>
  );
};
