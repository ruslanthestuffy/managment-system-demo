import { FC } from 'react';

import { EmployeeRole } from 'components/tables/EmployeesTable/types';

import { StyledRoleTag } from 'components/RoleTag/styles';

interface RoleTagProps {
  userRole: EmployeeRole;
}

export const RoleTag: FC<RoleTagProps> = ({ userRole }) => {
  const roleMap: Record<EmployeeRole, string> = {
    admin: 'Администратор',
    marketingEmployee: 'Сотрудник отдела маркетинга',
    departmentEmployee: 'Сотрудник отделения',
    ChairEmployee: 'Сотрудник кафедры',
    graduationSupervisor: 'Дипломный руководитель',
    classroomTeacher: 'Классный руководитель',
  };
  return <StyledRoleTag userRole={userRole}>{roleMap[userRole]}</StyledRoleTag>;
};
