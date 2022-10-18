import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import {Button} from 'components/common';

export const TokenNotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Ссылка не действительна</div> 
      <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
    </div>
  );
};

