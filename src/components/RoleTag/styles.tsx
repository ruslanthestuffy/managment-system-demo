import styled from 'styled-components';

import { EmployeeRole } from 'components/tables/EmployeesTable/types';

interface StyledRoleTagProps {
  userRole: EmployeeRole;
}

export const StyledRoleTag = styled.span<StyledRoleTagProps>(({ theme, userRole }) => {
  const colorMap: Record<EmployeeRole, string> = {
    admin: theme.colors.black.primary,
    marketingEmployee: theme.colors.success.dark,
    departmentEmployee: theme.colors.purple.primary,
    ChairEmployee: theme.colors.black.superPale,
    graduationSupervisor: theme.colors.brand.primary,
    classroomTeacher: theme.colors.warning.primary,
  };

  return {
    padding: '5px 15px',
    borderRadius: 4,
    color: theme.colors.white.primary,
    backgroundColor: colorMap[userRole],
  };
});
