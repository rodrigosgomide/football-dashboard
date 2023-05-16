"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const typeorm_1 = require("typeorm");
dotenv_1.default.config();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3306;
const HOST = process.env.HOST || 'localhost';
const USER = process.env.USERNAME || 'root';
const PASSWORD = process.env.PASSWORD || 'password';
const NODE_ENV = process.env.NODE_ENV;
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
const AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
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
exports.default = AppDataSource;
