import { createConnection } from 'typeorm';

export async function initConnection() {
    await createConnection();
}

