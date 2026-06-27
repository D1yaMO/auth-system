const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createUsersTable } = require('./models/userModel');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Auth system running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await createUsersTable();
  console.log('Users table ready');
});