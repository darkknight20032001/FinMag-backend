const mysql = require('mysql');
// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 1000000,
  host: '10.5.33.133',
  user: 'Rachit',
  password: 'Rachit@2005528',
  database: 'FinMag'
});

// Export the pool
module.exports = pool;
