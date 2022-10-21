import { FC } from 'react';

import { Loader } from 'components/common/index';

import { LoadingContainer } from 'components/common/LoadingOverlay/styles';

export const LoadingOverlay: FC = () => {
  return (
    <LoadingContainer>
      <Loader />
    </LoadingContainer>
  );
};

