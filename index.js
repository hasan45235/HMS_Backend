const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db');
require('dotenv').config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Server is running');
});


connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});