import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'; // Import direto para forçar o empacotamento
import 'dotenv/config';

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectModule: mysql2, // <-- OBRIGATÓRIO NA VERCEL
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  }
);