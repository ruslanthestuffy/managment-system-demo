import { FC, Fragment } from 'react';

import { TableWrapper } from 'components/tables/TableWrapper';

import { Diploma } from 'components/tables/DiplomasTable/types';

import { Column, Row, TBody, THead, THeader, Table } from 'components/tables/DepartmentsTable/styles';

interface DiplomasTableProps {
  diplomas: Diploma[];
}

export const DiplomasTable: FC<DiplomasTableProps> = ({ diplomas }) => {
  const displayData = (data: string | number) => {
    return data ? data : '-';
  };

  return (
    <TableWrapper title="Дипломы" buttonText="Добавить диплом" onButtonClick={() => console.log('Диплом добавлен')}>
      <Table>
        <THead>
          <Row>
            <THeader>Студент</THeader>
            <THeader>Тема</THeader>
            <THeader>Год</THeader>
          </Row>
        </THead>

        <TBody>
          {diplomas.length ? (
            <Fragment>
              {diplomas.map(({ id, student, topic, year }) => {
                return (
                  <Row key={`diploma-${id}`}>
                    <Column>{displayData(student)}</Column>
                    <Column>{displayData(topic)}</Column>
                    <Column>{displayData(year)}</Column>
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
