declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';

      REACT_APP_CLIENT_PROTOCOL: 'http' | 'https';
      REACT_APP_CLIENT_HOST: string;
      REACT_APP_CLIENT_PORT: number;
      REACT_APP_CLIENT_URL: string

      REACT_APP_SERVER_PROTOCOL: 'http' | 'https';
      REACT_APP_SERVER_HOST: string;
      REACT_APP_SERVER_PORT: number;
      REACT_APP_SERVER_URL: string;
    }
  }
}

export {};

