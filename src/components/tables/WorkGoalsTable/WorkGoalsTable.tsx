import { FC, Fragment } from 'react';

import { TableWrapper } from 'components/tables/TableWrapper';

import { WorkGoal } from 'components/tables/WorkGoalsTable/types';

import { Column, Row, TBody, THead, THeader, Table } from 'components/tables/WorkGoalsTable/styles';

interface WorkGoalsTableProps {
  workGoals: WorkGoal[];
}

export const WorkGoalsTable: FC<WorkGoalsTableProps> = ({ workGoals }) => {
  const displayData = (data: string | number) => {
    return data ? data : '-';
  };

  return (
    <TableWrapper title="Цели трудовой деятельности выпускника">
      <Table>
        <THead>
          <Row>
            <THeader>Месяц</THeader>
            <THeader>Наименование мероприятия</THeader>
            <THeader>Ожидаемый результат</THeader>
          </Row>
        </THead>

        <TBody>
          {workGoals.length ? (
            <Fragment>
              {workGoals.map(({ id, month, name, expectedResult }) => {
                return (
                  <Row key={`work-goal-${id}`}>
                    <Column>{displayData(month)}</Column>
                    <Column>{displayData(name)}</Column>
                    <Column>{displayData(expectedResult)}</Column>
                  </Row>
                );
              })}
            </Fragment>
          ) : (
            <Row>
              <Column>Пусто</Column>
            </Row>
          )}
        </TBody>
      </Table>
    </TableWrapper>
  );
};
