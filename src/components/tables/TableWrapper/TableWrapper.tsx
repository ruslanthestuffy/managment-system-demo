import { FC } from 'react';

import { Button } from 'components/common';
import { TileWrapper } from 'components/TileWrapper';

import { PlusIcon } from 'assets/icons';

import { OverflowContainer, TableHeader, Title } from 'components/tables/TableWrapper/styles';
import { GapContainer } from 'lib/styles/GapContainer';

interface TableWrapperProps {
  title?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const TableWrapper: FC<TableWrapperProps> = ({ title, onButtonClick, buttonText = 'Добавить', children }) => {
  const showHeader = title || onButtonClick;

  return (
    <TileWrapper>
      <GapContainer gap={30}>
        {showHeader && (
          <TableHeader>
            {title && <Title>{title ? title : 'Название таблицы'}</Title>}
            {onButtonClick && (
              <Button size="medium" variant="filled" onClick={onButtonClick}>
                <PlusIcon /> {buttonText}
              </Button>
            )}
          </TableHeader>
        )}

        <OverflowContainer>{children}</OverflowContainer>
      </GapContainer>
    </TileWrapper>
  );
};
