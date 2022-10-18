import { ChangeEventHandler, FC, useEffect, useState } from 'react';
import axios from 'axios';

import { Pagination } from 'components/Pagination';

const fetchData = async (limit: number, page: number) => {
  return await axios.get<any[]>('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _limit: limit,
      _page: page,
    },
  });
};

export const HomePage: FC = () => {
  const [todos, setTodos] = useState<Record<string, any>[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const fetchTodos = async (page: number, limit: number) => {
    const { data, headers } = await fetchData(limit, page);

    setTodos(data);
    setTotalCount(Number(headers['x-total-count']));
  };

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page, limit]);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const onLimitChange: ChangeEventHandler<HTMLSelectElement> = ({ target: { value } }) => {
    setLimit(Number(value));
  };

  return (
    <div>
      <ul>
        {todos.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>

      <Pagination total={totalCount} currentPage={page} onPageChange={onPageChange} limit={limit} />

      <label>Limit: </label>
      <select value={limit} onChange={onLimitChange}>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};
