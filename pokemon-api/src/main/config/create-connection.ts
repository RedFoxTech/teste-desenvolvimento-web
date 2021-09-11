import { createConnection } from 'typeorm';

export const ConnectionDatabase = {
  async connect(): Promise<void> {
    await createConnection();
  },
};
