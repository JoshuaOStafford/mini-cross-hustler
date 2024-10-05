import { createPool, Pool } from '@vercel/postgres';

/* eslint-disable no-var */
declare global {
  var _postgresPool: Pool | undefined;
}
/* eslint-enable no-var */

let pool: Pool;

if (!global._postgresPool) {
  global._postgresPool = createPool({
    connectionString: process.env.POSTGRES_URL!,
  });
}
pool = global._postgresPool;
pool = pool;

export default pool;