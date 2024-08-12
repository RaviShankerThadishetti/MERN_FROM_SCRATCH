const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', require('./routes/itemRoutes'));

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
