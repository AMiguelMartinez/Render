import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'render',
  password: 'm1gu3l4543',
  port: 5432,
});

export default pool;