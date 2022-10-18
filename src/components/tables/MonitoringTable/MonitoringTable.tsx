import { FC, Fragment } from 'react';

import { TableWrapper } from 'components/tables/TableWrapper';
import { Textarea } from 'components/inputs/Textarea';

import { months } from 'lib';

import { Achievements } from 'components/tables/MonitoringTable/types';

import { Column, Row, TBody, THead, THeader, Table } from 'components/tables/MonitoringTable/styles';

interface MonitoringTableProps {
  achievements: Achievements;
  totals: string;
}

export const MonitoringTable: FC<MonitoringTableProps> = ({ achievements, totals }) => {
  const displayData = (data: string | number) => {
    return data ? data : '-';
  };

  return (
    <TableWrapper title="Цели трудовой деятельности выпускника">
      <Table>
        <THead>
          <Row>
            <THeader>Месяц</THeader>
            <THeader>1 Неделя</THeader>
            <THeader>2 Неделя</THeader>
            <THeader>3 Неделя</THeader>
            <THeader>4 Неделя</THeader>
          </Row>
        </THead>

        <TBody>
          {Object.keys(achievements).length ? (
            <Fragment>
              {Object.entries(achievements).map(([month, { firstWeek, secondWeek, thirdWeek, fourthWeek }]) => {
                return (
                  <Row key={month}>
                    <Column>{months[month as keyof Achievements]}</Column>
                    <Column>{displayData(firstWeek)}</Column>
                    <Column>{displayData(secondWeek)}</Column>
                    <Column>{displayData(thirdWeek)}</Column>
                    <Column>{displayData(fourthWeek)}</Column>
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
      <Textarea
        name="monitoring-totals"
        label="Выводы по результатам мониторинга достижения выпускником поставленных целей"
      />
    </TableWrapper>
  );
};
