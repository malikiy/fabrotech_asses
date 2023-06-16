import { createLogger, format, transports } from 'winston';
// const { combine, timestamp, printf, colorize } = format;

const formatter = format.printf((info) => {
    let object = {
        message : info.message
      };
    return `${info.timestamp} ${info.level} ${JSON.stringify(object)}`;
    });

const generalLogger = createLogger({
    format : format.combine(
      format.colorize(),
      format.timestamp(),
      formatter
    ),
    transports : [
     new transports.Console({
       json : true,
       colorize : process.stdout.isTTY,
       timestamp: function () {
         return (new Date()).toLocaleTimeString();
       },
       prettyPrint : true
     }),
     new transports.File({ filename: 'combined.log' }),
     new transports.File({ filename: 'error.log', level: 'error' }),
   ]
 });

generalLogger.stream = {
  write : (info) => {
    generalLogger.info(info);
  }
};

let log = (message) => {
  generalLogger.log({
    level : 'verbose',
    message : message
  });
};

let debug = (message) => {
  generalLogger.log({
    level : 'debug',
    message : message
  });
};

let info = (message) => {
  generalLogger.log({
    level : 'info',
    message : message
  });
};

let warn = (message) => {
  generalLogger.log({
    level : 'warn',
    message : message
  });
};

let error = (message) => {
  generalLogger.log({
    level : 'error',
    message : message
  });
};

export default{
  log,
  debug,
  info,
  warn,
  error
}