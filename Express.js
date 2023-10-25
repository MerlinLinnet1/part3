const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const cultureInfo = [
  'Indian traditions',
  'Art forms',
  'Festivals',
  'Historical sites',
  'Cultural events',
];

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/culture', (req, res) => {
  res.json(cultureInfo);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});