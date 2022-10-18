import { FC } from 'react';
import ExternalPagination from 'rc-pagination';

import { ArrowNextIcon, ArrowPrevIcon, DotsIcon } from 'assets/icons';

import { ArrowButton, PageButton, wrapperStyles } from 'components/Pagination/styles';

interface PaginationProps {
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export const Pagination: FC<PaginationProps> = ({ currentPage, total, limit, onPageChange }) => {
  return (
    <ExternalPagination
      showLessItems
      hideOnSinglePage
      total={total}
      pageSize={limit}
      showTitle={false}
      current={currentPage}
      onChange={onPageChange}
      style={wrapperStyles}
      itemRender={(current, type, element) => {
        const typeMap = {
          page: (
            <PageButton key={current} className={currentPage === current ? 'current' : ''}>
              {current}
            </PageButton>
          ),
          prev: (
            <ArrowButton>
              <ArrowPrevIcon />
            </ArrowButton>
          ),
          next: (
            <ArrowButton>
              <ArrowNextIcon />
            </ArrowButton>
          ),
          'jump-prev': <DotsIcon />,
          'jump-next': <DotsIcon />,
        };

        return typeMap[type] || element;
      }}
    />
  );
};
