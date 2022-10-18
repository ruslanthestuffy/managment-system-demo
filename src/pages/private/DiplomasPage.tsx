import { FC, Fragment } from 'react';

import { PageTitle } from 'components/Typography';
import { Pagination } from 'components/Pagination';
import { DiplomasTable } from 'components/tables';

import { Diploma } from 'components/tables/DiplomasTable/types';

export const DiplomasPage: FC = () => {
  const diplomas: Diploma[] = [
    {
      id: '1',
      student: 'Руслан Джон Джонович',
      topic: 'Разработка клиентской части панели управления выпускниками',
      year: 2022,
    },
    {
      id: '2',
      student: 'Руслан Джон Джонович',
      topic: 'Разработка клиентской части панели управления выпускниками',
      year: 2022,
    },
    {
      id: '3',
      student: 'Руслан Джон Джонович',
      topic: 'Разработка клиентской части панели управления выпускниками',
      year: 2022,
    },
  ];

  return (
    <Fragment>
      <PageTitle>Дипломы</PageTitle>
      Фильтры
      <DiplomasTable diplomas={diplomas} />
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
