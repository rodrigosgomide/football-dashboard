import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3306;
const HOST: string = process.env.HOST || 'localhost';
const USER: string = process.env.USERNAME || 'root';
const PASSWORD: string = process.env.PASSWORD || 'password';
const NODE_ENV: string | undefined = process.env.NODE_ENV;
let DATABASE = process.env.DATABASE || 'brasil';

if (NODE_ENV) {
  switch (NODE_ENV) {
    case 'dev':
      if (process.env.NODE_ENV && process.env.DATABASE) {
        DATABASE = `${process.env.DATABASE}-${process.env.NODE_ENV}`;
        console.log(`USING ${NODE_ENV.toUpperCase()} DATABASE`);
      }
      break;
    case 'test':
      if (process.env.NODE_ENV && process.env.DATABASE) {
        DATABASE = `${process.env.DATABASE}-${process.env.NODE_ENV}`;
        console.log(`Using ${NODE_ENV.toUpperCase()} database`);
      }
      break;
  }
}

const AppDataSource = new DataSource({
  type: 'mysql',
  host: HOST,
  port: PORT,
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;
