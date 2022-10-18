import { FC, Fragment } from 'react';

import { PageTitle } from 'components/Typography';
import { Pagination } from 'components/Pagination';
import { StudentsTable } from 'components/tables';

import { Student } from 'components/tables/StudentsTable/types';

export const StudentsPage: FC = () => {
  const students: Student[] = [
    { id: '1', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '2', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '3', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '4', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '5', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '6', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '7', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '8', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '9', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '10', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '11', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '12', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '13', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '14', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '15', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '16', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '17', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
    { id: '18', fullName: 'Руслан Джон Джонович', group: 'ПОКС-44', entryYear: 2018 },
  ];

  return (
    <Fragment>
      <PageTitle>Студенты</PageTitle>
      Фильтры
      <StudentsTable students={students} />
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
