import { Manager } from './manager';

const run = async () => {
  // Start
  const manager = new Manager();
  await manager.initialize();

  // Loop
  await manager.loop();

  // End
};

run()
  .then(() => {
    console.log('Process finished');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
