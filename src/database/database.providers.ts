import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'pharma_dev',
        entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
