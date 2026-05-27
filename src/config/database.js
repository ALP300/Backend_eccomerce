import { Pool } from "pg";
import "dotenv/config";


export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false,
    },
});

export async function conecctionDB() {
    try {
        await pool.connect();
        console.log("Conexión exitosa a la base de datos");
    }
    catch (error) {
        console.log(error);
    }

}