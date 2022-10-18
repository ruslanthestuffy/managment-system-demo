import * as user from 'lib/api/user';
import * as auth from 'lib/api/auth';
import * as password from 'lib/api/password';

import axios from 'axios';

const http = axios.create({
  baseURL: '/api'
});

export const api = {
  http,
  user,
  auth,
  password,
};

