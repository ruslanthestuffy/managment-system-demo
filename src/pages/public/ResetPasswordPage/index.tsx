import { FC, Fragment } from 'react';

import { useParams } from 'react-router-dom';
import { useAsync } from 'react-use';

import { ResetPasswordForm } from 'components/forms/PasswordForm/ResetPasswordForm';
import { LoadingOverlay } from 'components/common';

import { api } from 'lib';

import { TokenNotFound } from 'pages/public/ResetPasswordPage/TokenNotFound';
import { Wrapper } from 'pages/public/ResetPasswordPage/style';

export const ResetPasswordPage: FC = () => {
  const { resetId } = useParams<{ resetId: string }>();

  const { loading, value: exists } = useAsync(async () => {
    if (!resetId) return false;
    return api.password.validateToken(resetId)
  }, []);

  return (
    <Wrapper>
      {loading ? <LoadingOverlay /> : (
        <Fragment>
          {exists && resetId ? <ResetPasswordForm resetId={resetId} /> : <TokenNotFound />}
        </Fragment>
      )}
    </Wrapper>
  );
};
