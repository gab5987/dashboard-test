import { Pool } from "pg";
const env = require("../../.env.json");

let conn: any;

if (!conn) {
  conn = new Pool({
    user: env.PGSQL_USER,
    password: env.PGSQL_PASSWORD,
    host: env.PGSQL_HOST,
    port: env.PGSQL_PORT,
    database: env.PGSQL_DATABASE,
  });
}

export default conn ;