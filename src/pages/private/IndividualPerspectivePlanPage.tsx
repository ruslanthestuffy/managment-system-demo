import { FC, Fragment } from 'react';

import { PageTitle } from 'components/Typography';
import { MonitoringTable, PracticeTable, WorkGoalsTable } from 'components/tables';

import { WorkGoal } from 'components/tables/WorkGoalsTable/types';
import { PracticeEntry } from 'components/tables/PracticeTable/types';

export const IndividualPerspectivePlanPage: FC = () => {
  const workGoals: WorkGoal[] = [
    { id: '1', month: 'Март', name: 'Работа', expectedResult: 'Найти работу' },
    { id: '2', month: 'Март', name: 'Работа', expectedResult: 'Найти работу' },
    { id: '3', month: 'Март', name: 'Работа', expectedResult: 'Найти работу' },
    { id: '4', month: 'Март', name: 'Работа', expectedResult: 'Найти работу' },
  ];

  const practices: PracticeEntry[] = [
    {
      id: '1',
      place: 'ООО "ВЕБАНТ"',
      primaryResponsibilities: 'Разработка',
      workPeriod: 'С 21.04.2021 по 21.05.2021',
    },
    {
      id: '2',
      place: 'ООО "ВЕБАНТ"',
      primaryResponsibilities: 'Разработка',
      workPeriod: 'С 21.04.2021 по 21.05.2021',
    },
    {
      id: '3',
      place: 'ООО "ВЕБАНТ"',
      primaryResponsibilities: 'Разработка',
      workPeriod: 'С 21.04.2021 по 21.05.2021',
    },
    {
      id: '4',
      place: 'ООО "ВЕБАНТ"',
      primaryResponsibilities: 'Разработка',
      workPeriod: 'С 21.04.2021 по 21.05.2021',
    },
  ];

  const achievements = {
    march: {
      firstWeek: '1',
      secondWeek: '2',
      thirdWeek: '3',
      fourthWeek: '4',
    },
    april: {
      firstWeek: '5',
      secondWeek: '6',
      thirdWeek: '7',
      fourthWeek: '8',
    },
    may: {
      firstWeek: '9',
      secondWeek: '10',
      thirdWeek: '11',
      fourthWeek: '12',
    },
    june: {
      firstWeek: '12',
      secondWeek: '',
      thirdWeek: '14',
      fourthWeek: '15',
    },
    july: {
      firstWeek: '',
      secondWeek: '',
      thirdWeek: '',
      fourthWeek: 'sdf',
    },
    august: {
      firstWeek: '',
      secondWeek: 'a',
      thirdWeek: '',
      fourthWeek: '',
    },
    september: {
      firstWeek: '16',
      secondWeek: '',
      thirdWeek: '17',
      fourthWeek: '19',
    },
    october: {
      firstWeek: '',
      secondWeek: '',
      thirdWeek: '',
      fourthWeek: '99',
    },
    november: {
      firstWeek: '',
      secondWeek: '1',
      thirdWeek: '',
      fourthWeek: '',
    },
    december: {
      firstWeek: '',
      secondWeek: '',
      thirdWeek: '3',
      fourthWeek: '',
    },
  };

  return (
    <Fragment>
      <PageTitle>Индивидуальный перспективный план</PageTitle>
      <WorkGoalsTable workGoals={workGoals} />
      <PracticeTable practices={practices} />
      <MonitoringTable
        achievements={achievements}
        totals="Totals Totals Totals Totals Totals Totals Totals Totals Totals Totals Totals Totals Totals Totals "
      />
    </Fragment>
  );
};
