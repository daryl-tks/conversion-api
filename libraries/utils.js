import creds from '../creds.dev.json';

export const mysql = require('serverless-mysql')({
  config: {
    host: creds.IS_OFFLINE ? creds.LOCAL_DB_HOST : process.env.DB_HOST,
    database: creds.IS_OFFLINE ? creds.LOCAL_DB_NAME : process.env.DB_NAME,
    user: creds.IS_OFFLINE ? creds.LOCAL_DB_USER : process.env.DB_USER,
    password: creds.IS_OFFLINE
      ? creds.LOCAL_DB_PASSWORD
      : process.env.DB_PASSWORD,
  },
});

export const response = (props) => {
  const { body = {}, statusCode = 200 } = props;

  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body),
  };
};
