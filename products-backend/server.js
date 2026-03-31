const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
app.use(cors());

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'practice_db',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
});

app.get('/products', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT product_name, price, stock FROM products');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching products', err);
    res.status(500).json({ error: 'Database error' });
  }
});

const PORT = process.env.PORT || 4004;
app.listen(PORT, () => {
  console.log(`Products backend running on http://localhost:${PORT}`);
});
