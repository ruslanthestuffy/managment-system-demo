import { FC, Fragment } from 'react';

import { PageTitle } from 'components/Typography';
import { DepartmentsTable } from 'components/tables';

import { Department } from 'components/tables/DepartmentsTable/types';

export const DepartmentsPage: FC = () => {
  const departments: Department[] = [
    { id: '1', name: 'Программное обеспечение компьютерных систем', manager: 'Шлюпкина А.И.' },
    { id: '2', name: 'Программное обеспечение компьютерных систем', manager: 'Шлюпкина А.И.' },
    { id: '3', name: 'Программное обеспечение компьютерных систем', manager: 'Шлюпкина А.И.' },
    { id: '4', name: 'Программное обеспечение компьютерных систем', manager: 'Шлюпкина А.И.' },
    { id: '5', name: 'Программное обеспечение компьютерных систем', manager: 'Шлюпкина А.И.' },
  ];

  return (
    <Fragment>
      <PageTitle>Отделения</PageTitle>
      <DepartmentsTable departments={departments} />
    </Fragment>
  );
};
