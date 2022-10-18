import { FC, Fragment } from 'react';

import { PageTitle } from 'components/Typography';
import { GroupCreatingTable } from 'components/tables';
import { Button } from 'components/common';

import { InitialStudent } from 'components/tables/GroupCreatingTable/types';
import { UserIcon } from 'assets/icons';

export const GroupCreatingPage: FC = () => {
  const students: InitialStudent[] = [
    {
      id: '2rse233rf2d1szf1a',
      fullName: 'Руслан Джон Джонович',
      initialPassword: '2rse233rf2d1szf1a',
      verified: false,
    },
    {
      id: '2rse23rf2d1szf1a',
      fullName: 'Руслан Джон Джонович',
      initialPassword: '2rse233rf2d1szf1a',
      verified: false,
    },
    {
      id: '2rse2rf2dsу3zf1a',
      fullName: 'Руслан Джон Джонович',
      initialPassword: '2rse233rf2d1szf1a',
      verified: false,
    },
    { id: '2rse233rf21szf1a', fullName: 'Руслан Джон Джонович', initialPassword: '2rse233rf2d1szf1a', verified: true },
    {
      id: '2rs233rf2d1szf1a',
      fullName: 'Руслан Джон Джонович',
      initialPassword: '2rse233rf2d1szf1a',
      verified: false,
    },
    {
      id: '2rse233rzf1a',
      fullName: 'Руслан Джон Джонович',
      initialPassword: '2rse233rf2d1szf1a',
      verified: false,
    },
    {
      id: '2se233rf2d1szf1a',
      fullName: 'Руслан Джон Джонович',
      initialPassword: '2rse233rf2d1szf1a',
      verified: false,
    },
    { id: '2rs3rf2d1szf1a', fullName: 'Руслан Джон Джонович', initialPassword: '2rse233rf2d1szf1a', verified: true },
    { id: '2rse233rf2dzf1a', fullName: 'Руслан Джон Джонович', initialPassword: '2rse233rf2d1szf1a', verified: true },
  ];

  return (
    <Fragment>
      <PageTitle>Создание группы</PageTitle>
      Фильтры
      <GroupCreatingTable students={students} />
      <Button size="large" variant="filled" onClick={() => console.log('Группа успешно создана')}>
        Создать
      </Button>
    </Fragment>
  );
};
