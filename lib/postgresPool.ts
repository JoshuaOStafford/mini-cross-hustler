import { createPool, Pool } from '@vercel/postgres';

// Define the pool globally with correct typing
let pool: Pool;

if (!global._postgresPool) {
  global._postgresPool = createPool({
    connectionString: process.env.POSTGRES_URL!,
  });
}
pool = global._postgresPool;

export default pool;