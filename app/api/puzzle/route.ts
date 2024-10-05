import pool from "@/lib/postgresPool";

export async function POST(request: Request) {
    const { date, solveTime, structure, words } = await request.json();
    const client = await pool.connect(); // Get the client from the pool
  
    try {
      // Begin the transaction
      await client.query('BEGIN');
  
      // Insert the puzzle and return the generated ID
      const result = await client.query(`
        INSERT INTO Puzzles (date, solveTime, structure)
        VALUES ($1, $2, $3)
        RETURNING id;
      `, [date, solveTime, structure]); // Pass values as parameters
  
      const puzzleId = result.rows[0].id;
  
      // Insert words associated with the puzzle
      for (const word of words) {
        await client.query(`
          INSERT INTO Words (puzzleId, length, characters, known)
          VALUES ($1, $2, $3, $4);
        `, [puzzleId, word.length, word.characters, word.known]);
      }
  
      // Commit the transaction
      await client.query('COMMIT');
  
      return new Response(JSON.stringify({ message: "Puzzle created successfully", puzzleId }), { status: 201 });
    } catch (error: Error | unknown) {
      // Rollback in case of an error
      await client.query('ROLLBACK');
      return new Response(JSON.stringify({ error: (error as Error).message || "An error occurred" }), { status: 500 });
    } finally {
      client.release(); // Always release the client back to the pool
    }
}

