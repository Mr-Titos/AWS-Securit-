require('dotenv').config();
const express = require('express');
const infoRoutes = require('./routes/info');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', infoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});