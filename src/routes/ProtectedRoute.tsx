import { FC, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { intersection } from 'lodash';

import { AccessDeniedPage } from 'pages/private';

import { useAuth } from 'hooks';

const currentRoles: string[] = ['admin'];
const userId = '1';

export interface ProtectedRouteProps {
  roles?: string[];
  users?: string[];
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, roles, users }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  const userIsAllowed = users?.includes(userId);
  const roleIsAllowed = !roles?.length || intersection(roles, currentRoles).length > 0;

  if (userIsAllowed || roleIsAllowed) return <Fragment>{children}</Fragment>;

  return <AccessDeniedPage />;
};
