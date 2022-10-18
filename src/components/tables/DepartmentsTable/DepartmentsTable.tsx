import { FC, Fragment } from 'react';

import { TableWrapper } from 'components/tables/TableWrapper';

import { Department } from 'components/tables/DepartmentsTable/types';

import { Column, Row, TBody, THead, THeader, Table } from 'components/tables/DepartmentsTable/styles';

interface DepartmentsTableProps {
  departments: Department[];
}

export const DepartmentsTable: FC<DepartmentsTableProps> = ({ departments }) => {
  const displayData = (data: string | number) => {
    return data ? data : '-';
  };

  return (
    <TableWrapper
      title="Отделения"
      buttonText="Добавить отделение"
      onButtonClick={() => console.log('Отделение добавлено')}
    >
      <Table>
        <THead>
          <Row>
            <THeader>Название</THeader>
            <THeader>Заведующий</THeader>
          </Row>
        </THead>

        <TBody>
          {departments.length ? (
            <Fragment>
              {departments.map(({ id, name, manager }) => {
                return (
                  <Row key={`department-${id}`}>
                    <Column>{displayData(name)}</Column>
                    <Column>{displayData(manager)}</Column>
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
