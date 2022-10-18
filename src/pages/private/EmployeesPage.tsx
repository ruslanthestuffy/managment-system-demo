import { FC, Fragment } from 'react';

import { PageTitle } from 'components/Typography';
import { Pagination } from 'components/Pagination';
import { EmployeesTable } from 'components/tables';

import { Employee } from 'components/tables/EmployeesTable/types';

export const EmployeesPage: FC = () => {
  const employees: Employee[] = [
    { id: '1', fullName: 'Руслан Джон Джонович', role: 'admin', active: true },
    { id: '2', fullName: 'Руслан Джон Джонович', role: 'marketingEmployee', active: true },
    { id: '3', fullName: 'Руслан Джон Джонович', role: 'departmentEmployee', active: true },
    { id: '4', fullName: 'Руслан Джон Джонович', role: 'ChairEmployee', active: true },
    { id: '5', fullName: 'Руслан Джон Джонович', role: 'graduationSupervisor', active: true },
    { id: '6', fullName: 'Руслан Джон Джонович', role: 'classroomTeacher', active: true },
  ];

  return (
    <Fragment>
      <PageTitle>Сотрудники</PageTitle>
      Фильтры
      <EmployeesTable employees={employees} />
      <Pagination
        currentPage={1}
        total={100}
        limit={10}
        onPageChange={function (page: number): void {
          throw new Error('Function not implemented.');
        }}
      />
    </Fragment>
  );
};
