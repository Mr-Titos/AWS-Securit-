const mysql = require('mysql2/promise');

const dbConfig = {
      host: 'database-1.cham40qqgjy1.eu-north-1.rds.amazonaws.com',
      user: 'appuser',
      password: 'motdepassefort',
      database: 'db'
};

const getInfo = async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM db.info;');
    if (rows.length > 0) {
        res.json(rows[0]);
    } else {
        res.status(404).json({ error: 'No info found' });
    }
    console.log('Connexion OK:', rows);
    await connection.end();
  } catch (err) {
    console.error('Erreur MySQL:', err);
  }
};

module.exports = { getInfo };