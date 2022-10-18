import { FC, Fragment } from 'react';

import { TableWrapper } from 'components/tables/TableWrapper';

import { InitialStudent } from 'components/tables/GroupCreatingTable/types';

import { SuccessGreenIcon } from 'assets/icons';

import { Column, Row, TBody, THead, THeader, Table } from 'components/tables/GroupCreatingTable/styles';

interface GroupCreatingTableProps {
  students: InitialStudent[];
}

export const GroupCreatingTable: FC<GroupCreatingTableProps> = ({ students }) => {
  const displayData = (data: string | number) => {
    return data ? data : '-';
  };

  return (
    <TableWrapper title="Студенты" buttonText="Добавить студента" onButtonClick={() => console.log('Студент добавлен')}>
      <Table>
        <THead>
          <Row>
            <THeader>ФИО</THeader>
            <THeader>Идентификатор</THeader>
            <THeader>Входной пароль</THeader>
            <THeader>Прошел верификацию</THeader>
          </Row>
        </THead>

        <TBody>
          {students.length ? (
            <Fragment>
              {students.map(({ id, fullName, initialPassword, verified }) => {
                return (
                  <Row key={`initial-student-${id}`}>
                    <Column>{displayData(fullName)}</Column>
                    <Column>{verified ? '-' : displayData(id)}</Column>
                    <Column>{verified ? '-' : displayData(initialPassword)}</Column>
                    <Column>{verified && <SuccessGreenIcon />}</Column>
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
