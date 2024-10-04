declare global {
    var _postgresPool: Pool | undefined; // This is the type of your Postgres pool
  }
  
  export {};