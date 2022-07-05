/**
 * @return { object}
 */
const createLogger = () => {
  // put your code here
  const memory = [];
  const warn = warnText => {
    const messageObj = {};
    messageObj.message = warnText;
    messageObj.dateTime = new Date();
    messageObj.type = 'warn';
    memory.push(messageObj);
  };
  const error = text => {
    const messageObj = {};
    messageObj.message = text;
    messageObj.dateTime = new Date();
    messageObj.type = 'error';
    memory.push(messageObj);
  };
  const log = text => {
    const messageObj = {};
    messageObj.message = text;
    messageObj.dateTime = new Date();
    messageObj.type = 'log';
    memory.push(messageObj);
  };
  const getRecords = text => {
    if (!text) {
      return memory.sort((a, b) => Number(a.dateTime) - Number(b.dateTime));
    }
    return memory
      .filter(name => name.type === text)
      .sort((a, b) => Number(b.dateTime) - Number(a.dateTime));
  };
  return {
    warn,
    error,
    log,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]

logger1.getRecords('log'); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords('error'); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords('warn'); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn('Opps, something is happenning');
logger2.getRecords('error'); // ===> []
logger2.getRecords('warn'); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords('error'); // ===> []
console.log(logger3.getRecords()); // ===> []
