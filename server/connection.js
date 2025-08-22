import mysql from "mysql2/promise";

export const pool = mysql.createPool({
    host: "localhost",          
    database: "SkyCare",    
    port: 3305,                  
    user: "root",                
    
    //stable conection
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0
});

async function testDatabaseConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("successful database connection");
        connection.release();
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
}

testDatabaseConnection();