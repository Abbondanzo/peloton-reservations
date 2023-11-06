import { logger } from './logger';
import { Manager } from './manager';

const run = async () => {
  // Start
  const manager = new Manager();
  await manager.initialize();
  logger.log('Manager initialized');

  // Loop
  await manager.loop();

  // End
};

run()
  .then(() => {
    logger.log('Process finished');
  })
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
