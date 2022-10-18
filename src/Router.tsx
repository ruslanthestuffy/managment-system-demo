import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  ProfilePage,
  SettingsPage,
  MobileNavigationPage,
  IndividualPerspectivePlanPage,
  DepartmentsPage,
  GroupCreatingPage,
  StudentsPage,
  DiplomasPage,
  EmployeesPage,
} from 'pages/private';
import { LoginPage, CredentialsPage, RecoveryPage, ResetPasswordPage } from 'pages/public';

import { AuthLayout, MainLayout } from 'components/layouts';

import { ProtectedRoute } from 'routes';

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="credentials" element={<CredentialsPage />} />
        <Route path="recovery" element={<RecoveryPage />} />
        <Route path="reset-password/:resetId" element={<ResetPasswordPage />} />
      </Route>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="employees"
          element={
            <ProtectedRoute>
              <EmployeesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="departments"
          element={
            <ProtectedRoute>
              <DepartmentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="students"
          element={
            <ProtectedRoute>
              <StudentsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="group-creating"
          element={
            <ProtectedRoute>
              <GroupCreatingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="individual-development-plan"
          element={
            <ProtectedRoute>
              <IndividualPerspectivePlanPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="diplomas"
          element={
            <ProtectedRoute>
              <DiplomasPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="mobile-navigation"
          element={
            <ProtectedRoute>
              <MobileNavigationPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
