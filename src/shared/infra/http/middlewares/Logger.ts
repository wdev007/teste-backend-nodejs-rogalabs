import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

import formatDate from '@shared/utils/formatDate';

const getActualRequestDurationInMilliseconds = (start: [number, number]) => {
  const NS_PER_SEC = 1e9; //  convert to nanoseconds
  const NS_TO_MS = 1e6; // convert to milliseconds
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};

export default (
  { method, statusCode, url, statusMessage }: Request,
  response: Response,
  next: NextFunction
): void => {
  const current_datetime = new Date();
  const formatedDate = formatDate(current_datetime);
  const start = process.hrtime();
  const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);
  const log = `[${formatedDate}] ${method}:${url} ${statusCode} ${statusMessage} ${durationInMilliseconds.toLocaleString()} ms`;

  console.log(log);
  fs.appendFile('request_logs.log', `${log}\n`, err => {
    if (err) {
      console.log(err);
    }
  });
  next();
};
