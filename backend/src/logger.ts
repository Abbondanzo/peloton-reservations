class Prefix {
  toString() {
    return `[${new Date().toISOString()}]`;
  }
}

export const logger = {
  log: console.log.bind(console, '%s', new Prefix()),
  error: console.error.bind(console, '%s', new Prefix()),
};
