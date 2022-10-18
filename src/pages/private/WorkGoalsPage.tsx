import { FC, Fragment } from 'react';

import { PageTitle } from 'components/Typography';
import { WorkGoalsTable } from 'components/tables';
import { WorkGoal } from 'components/tables/WorkGoalsTable/types';

export const WorkGoalsPage: FC = () => {
  const workGoals: WorkGoal[] = [];

  return (
    <Fragment>
      <PageTitle>Создание группы</PageTitle>
      Фильтры
      <WorkGoalsTable workGoals={workGoals} />
    </Fragment>
  );
};
