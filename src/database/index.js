import { Client } from "pg";
import 'dotenv/config';

export const database = new Client(
  process.env.NODE_ENV === "test"
    ?
    {
      user: "ormartins",
      host: "localhost",
      database: "tests_products",
      password: "1234",
      port: 5432
    }
    :
    {
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    }
);

const startDatabase = async () => {
  await database.connect();
};

export default startDatabase;