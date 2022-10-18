import { FC, Fragment } from 'react';

import { TableWrapper } from 'components/tables/TableWrapper';

import { Employee } from 'components/tables/EmployeesTable/types';

import { Column, Row, TBody, THead, THeader, Table } from 'components/tables/EmployeesTable/styles';
import { RoleTag } from 'components/RoleTag';

interface EmployeesTableProps {
  employees: Employee[];
}

export const EmployeesTable: FC<EmployeesTableProps> = ({ employees }) => {
  const displayData = (data: string | number) => {
    return data ? data : '-';
  };

  return (
    <TableWrapper
      title="Сотрудники"
      buttonText="Добавить сотрудника"
      onButtonClick={() => console.log('Сотрудник добавлен')}
    >
      <Table>
        <THead>
          <Row>
            <THeader>ФИО</THeader>
            <THeader>Позиция</THeader>
            <THeader>Активен</THeader>
          </Row>
        </THead>

        <TBody>
          {employees.length ? (
            <Fragment>
              {employees.map(({ id, fullName, role, active }) => {
                return (
                  <Row key={`employee-${id}`}>
                    <Column>{displayData(fullName)}</Column>
                    <Column>
                      <RoleTag userRole={role} />
                    </Column>
                    <Column>{active ? 'Да' : 'Нет'}</Column>
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
