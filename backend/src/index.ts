import { Schedule } from './schedule';

const run = async () => {
  const schedule = new Schedule();
  await schedule.initialize();
};

run()
  .then(() => {
    console.log('Process finished');
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
