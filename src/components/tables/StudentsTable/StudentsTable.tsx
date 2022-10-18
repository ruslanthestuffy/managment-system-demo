import { FC, Fragment } from 'react';

import { TableWrapper } from 'components/tables/TableWrapper';

import { Student } from 'components/tables/StudentsTable/types';

import { Column, Row, TBody, THead, THeader, Table } from 'components/tables/StudentsTable/styles';

interface StudentsTableProps {
  students: Student[];
}

export const StudentsTable: FC<StudentsTableProps> = ({ students }) => {
  const displayData = (data: string | number) => {
    return data ? data : '-';
  };

  return (
    <TableWrapper title="Студенты" buttonText="Добавить студента" onButtonClick={() => console.log('Студент добавлен')}>
      <Table>
        <THead>
          <Row>
            <THeader>ФИО</THeader>
            <THeader>Группа</THeader>
            <THeader>Год поступления</THeader>
          </Row>
        </THead>

        <TBody>
          {students.length ? (
            <Fragment>
              {students.map(({ id, fullName, group, entryYear }) => {
                return (
                  <Row key={`student-${id}`}>
                    <Column>{displayData(fullName)}</Column>
                    <Column>{displayData(group)}</Column>
                    <Column>{displayData(entryYear)}</Column>
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
