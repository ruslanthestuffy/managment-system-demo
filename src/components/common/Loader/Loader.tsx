import { FC } from 'react';

import { StyledLoader } from 'components/common/Loader/styles';

export interface LoaderProps {
  size?: number;
}

export const Loader: FC<LoaderProps> = ({ size = 50 }) => {
  return (
    <StyledLoader size={size} />
  );
};

