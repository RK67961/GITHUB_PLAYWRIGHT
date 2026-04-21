import winston from 'winston';
import path from 'path';
import fs from 'fs';

const logsDir = path.resolve('logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}
const { combine, timestamp, printf, colorize } = winston.format;
const logFormat = printf(({ level, message, timestamp, testName, ...meta }) => {
  const test = testName ? `[${testName}]` : '';
  const extra = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
  return `${timestamp} [${level.toUpperCase()}] ${test} ${message}${extra}`;
});

// Logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'debug',
  format: combine(
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp({ format: 'HH:mm:ss' }),
        logFormat
      )
    }),
    new winston.transports.File({
      filename: path.join(logsDir, 'test-run.log')
    }),
    new winston.transports.File({
      filename: path.join(logsDir, 'errors.log'),
      level: 'error'
    })
  ]
});
export const getTestLogger = (testName) => logger.child({ testName });

export default logger;