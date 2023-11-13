import { Alerter } from './alerter';
import { logger } from './logger';
import { Manager } from './manager';

const run = async () => {
  // Start
  const alerter = new Alerter();
  await alerter.initialize();
  logger.log('Alerter initialized');

  const manager = new Manager(alerter);
  await manager.initialize();
  logger.log('Manager initialized');

  // Loop
  await manager.loop();

  // End
  process.on('SIGINT', () => {
    logger.log('Terminating control loop');
    manager.cancel();
    process.exit(0);
  });
};

run()
  .then(() => {
    logger.log('Process finished');
  })
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
