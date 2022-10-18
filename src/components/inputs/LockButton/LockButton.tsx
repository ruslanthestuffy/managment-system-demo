import { FC } from 'react';

import { LockIcon, UnlockIcon } from 'assets/icons';

import { IconWrapper } from 'components/inputs/LockButton/styles';

interface LockButtonProps {
  locked: boolean;
  disabled: boolean;
  onClick: () => void;
}

export const LockButton: FC<LockButtonProps> = ({ locked, disabled, onClick }) => {
  const icon = locked ? <LockIcon /> : <UnlockIcon />;

  return (
    <IconWrapper locked={locked} onClick={onClick} disabled={disabled}>
      {icon}
    </IconWrapper>
  );
};
