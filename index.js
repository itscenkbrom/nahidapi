const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sağlık kontrolü
app.get('/health', (req, res) => {
  res.send('API is healthy!');
});

// Random /mita endpoint
app.get('/mita', (req, res) => {
  const rawData = fs.readFileSync('data.json');
  const data = JSON.parse(rawData);

  // Random bir index seç
  const randomIndex = Math.floor(Math.random() * data.results.length);
  const randomResult = data.results[randomIndex];

  // Tekli JSON objesi döndür
  res.json({ results: [randomResult] });
});

app.listen(port, () => {
  console.log(`NahidaApi listening at http://localhost:${port}`);
});
