const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the server');
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
