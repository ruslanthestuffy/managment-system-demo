import { FC, Fragment } from 'react';

import { TableWrapper } from 'components/tables/TableWrapper';

import { PracticeEntry } from 'components/tables/PracticeTable/types';

import { Column, Row, TBody, THead, THeader, Table } from 'components/tables/PracticeTable/styles';

interface PracticeTableProps {
  practices: PracticeEntry[];
}

export const PracticeTable: FC<PracticeTableProps> = ({ practices }) => {
  const displayData = (data: string | number) => {
    return data ? data : '-';
  };

  return (
    <TableWrapper title="Практика" buttonText="Новая запись" onButtonClick={() => console.log('Запись добавлена')}>
      <Table>
        <THead>
          <Row>
            <THeader>Место получения практики</THeader>
            <THeader>Основные обязанности</THeader>
            <THeader>Период работы</THeader>
          </Row>
        </THead>

        <TBody>
          {practices.length ? (
            <Fragment>
              {practices.map(({ id, place, primaryResponsibilities, workPeriod }) => {
                return (
                  <Row key={`practice-${id}`}>
                    <Column>{displayData(place)}</Column>
                    <Column>{displayData(primaryResponsibilities)}</Column>
                    <Column>{displayData(workPeriod)}</Column>
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
