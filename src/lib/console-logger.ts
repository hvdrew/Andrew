import * as colors from 'colors';

const log = {
    info: colors.yellow,
    error: colors.red,
    bad: colors.red.italic,
    warning: colors.yellow.underline,
    loading: colors.yellow.italic.dim,
    success: colors.bgGreen.black.dim,
    good: colors.cyan,
    silly: colors.rainbow,
    america: colors.america
};

// Uncomment below and run the file to see the chosen colors in action:

// console.log(log.error('Connection failed.'))
// console.log(log.success('Connected successfully.'))
// console.log(log.good('An order has been placed.'))
// console.log(log.bad('Your server has slowed down due to CPU limitations.'))
// console.log(log.loading('Attempting to connect...'))
// console.log(log.info('File loaded.'))
// console.log(log.warning('Server requires a restart.'))
// console.log(log.silly('Connected super quick!'))
// console.log(log.america('Your server imploded... FUCK YEAH'))

export { log }