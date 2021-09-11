import 'reflect-metadata';
import fs from 'fs';
import { ConnectionDatabase } from './config';

ConnectionDatabase.connect()
  .then(async () => {
    const app = await (await import('./config/app')).default;
    const PORT = process.env.PORT;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err =>
    fs.appendFile('log-errors.txt', `${new Date()} - error: ${err} \n`, () => {
      console.log(`someone didn't drink coffee...`, err);
    }),
  );
